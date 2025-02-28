import { getPosts } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, Post } from '@/types/sanity';

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function BlogPage(props: PageProps) {
  const { locale } = await props.params;

  const posts: Post[] = await getPosts();

  return (
    <div>
      <h1>Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => {
          const localizedTitle =
            post.title?.[locale] ?? 'Sem título';
          const localizedSlug = post.slug?.[locale] ?? '#';

          const dateStr = post.publishedAt
            ? new Intl.DateTimeFormat(
                locale === 'pt' ? 'pt-BR' : locale,
                {
                  timeZone: 'UTC',
                }
              ).format(new Date(post.publishedAt))
            : 'Data não disponível';

          const categories = post.categories
            ?.map(cat => cat.title?.[locale] || '')
            .filter(Boolean);

          return (
            <div
              key={post._id}
              className="border p-4 rounded-lg"
            >
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || localizedTitle}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              )}

              <h2 className="text-2xl mb-2">
                {localizedTitle}
              </h2>

              {post.author && (
                <p className="text-sm text-gray-600">
                  by {post.author}
                </p>
              )}

              {categories && categories.length > 0 && (
                <p className="text-sm text-gray-500">
                  {categories.join(', ')}
                </p>
              )}

              <p className="text-sm text-gray-400">
                {dateStr}
              </p>

              <Link
                href={`/${locale}/blog/${localizedSlug}`}
                className="text-blue-500"
              >
                Leia mais
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
