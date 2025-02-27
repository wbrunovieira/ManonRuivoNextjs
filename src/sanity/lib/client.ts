import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

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
    "slug": slug.current,
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
      title
    },
    publishedAt
  }`;

  console.log(
    'Executando consulta para buscar posts:',
    query
  ); // Log da consulta

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
    return []; // Retorna um array vazio caso ocorra algum erro
  }
};
