'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

type SupportedLocale = 'pt' | 'en' | 'es';

type Post = {
  _id: string;
  title: { pt: string; en: string; es: string };
  slug: { pt: string; en: string; es: string } | null;
  mainImage: {
    asset: { url: string };
    alt?: string | null;
  } | null;
  author: string;
  categories: Array<{
    pt: string;
    en: string;
    es: string;
  } | null>;
  publishedAt: string | null;
};

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({
  posts,
}: BlogContentProps) {
  const localeRaw = useLocale();
  // Normalize se necessário: se o hook retornar 'pt-BR', converta para 'pt'
  const locale: SupportedLocale = (
    localeRaw === 'pt-BR' ? 'pt' : localeRaw
  ) as SupportedLocale;

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div
            key={post._id}
            className="border p-4 rounded-lg"
          >
            {post.mainImage &&
              post.mainImage.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={
                    post.mainImage.alt || post.title[locale]
                  }
                  width={300}
                  height={300}
                  className="object-cover"
                />
              )}
            <h2 className="text-2xl mb-2">
              {post.title[locale]}
            </h2>
            <p className="text-sm text-gray-600">
              {post.author && `by ${post.author}`}
            </p>
            <p className="text-sm text-gray-500">
              {post.categories
                ?.filter(cat => cat != null)
                .map(cat => cat![locale])
                .join(', ') || 'Sem categorias'}
            </p>
            <p className="text-sm text-gray-400">
              {post.publishedAt
                ? new Date(
                    post.publishedAt
                  ).toLocaleDateString(
                    locale === 'pt' ? 'pt-BR' : locale
                  )
                : 'Data não disponível'}
            </p>
            {post.slug && post.slug[locale] && (
              <Link
                href={`/${locale}/blog/${post.slug[locale]}`}
                className="text-blue-500"
              >
                Leia mais
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
