// sanity/lib/client.ts
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';
import { Post } from '@/types/sanity';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const getPosts = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
     "slug": {
    "pt": slug.pt.current,
    "en": slug.en.current,
    "es": slug.es.current
  },
    body,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    "author": author->name,
     categories[]->{
      _id,
      // Título multilíngue do Category
      title,
      // Slug multilíngue do Category
      "slug": {
        "pt": slug.pt.current,
        "en": slug.en.current,
        "es": slug.es.current
      },
      // Descrição multilíngue
      description
    },
    publishedAt
  }`;

  console.log(
    'Executando consulta para buscar posts:',
    query
  );

  try {
    const posts = await client.fetch(query);

    if (posts.length === 0) {
      console.log('Nenhum post encontrado');
    } else {
      console.log('Posts encontrados:', posts);
    }

    return posts;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export async function getPostBySlug(
  slug: string,
  locale: string
): Promise<Post | null> {
  const localizedSlugField = `slug.${locale}.current`;
  const query = `*[_type == "post" && ${localizedSlugField} == $slug][0]{
    _id,
    title,
    "slug": {
      "pt": slug.pt.current,
      "en": slug.en.current,
      "es": slug.es.current
    },
    body,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    "author": author->name,
    categories[]->{
      _id,
      title,
      "slug": {
        "pt": slug.pt.current,
        "en": slug.en.current,
        "es": slug.es.current
      },
      description
    },
    publishedAt
  }`;

  try {
    const post = await client.fetch<Post>(query, { slug });
    return post || null;
  } catch (error) {
    console.error('Erro ao buscar o post por slug:', error);
    return null;
  }
}
