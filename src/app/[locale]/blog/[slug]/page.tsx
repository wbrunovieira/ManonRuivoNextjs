import { getPosts } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import type { PortableTextBlock } from '@portabletext/types';

// Força a renderização dinâmica da página
export const dynamic = 'force-dynamic';

type Post = {
  _id: string;
  title: string;
  body: PortableTextBlock[];
  slug: string;
  mainImage: string;
  author: string;
  categories: { _id: string; title: string }[];
  publishedAt: string;
};

// Remove the Props type and just use any for the component props
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage(props: any) {
  // Acessa os parâmetros diretamente
  const { locale, slug } = props.params;
  console.log('Parâmetros da rota:', { locale, slug });

  const posts: Post[] = await getPosts();
  console.log('Posts recebidos:', posts);

  const post = posts.find(post => post.slug === slug);
  console.log('Post encontrado:', post);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      {post.mainImage && (
        <Image
          src={post.mainImage}
          alt={post.title}
          width={300}
          height={300}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <p className="text-sm text-gray-600">
        by {post.author}
      </p>
      <p className="text-sm text-gray-500">
        {post.categories
          .map(category => category.title)
          .join(', ')}
      </p>
      <p className="text-sm text-gray-400">
        {post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString(
              locale === 'pt' ? 'pt-BR' : locale
            )
          : 'Data não disponível'}
      </p>
      <div className="prose mt-6">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
