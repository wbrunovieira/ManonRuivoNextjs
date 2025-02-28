import { getPosts } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { Locale, Post } from '@/types/sanity';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function BlogPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'blog',
  });
  const posts: Post[] = await getPosts();

  return (
    <div className="min-h-screen bg-lilac-light mb-32">
      <div className="container mx-auto p-4 mt-16 ">
        <h1 className="text-4xl font-bold text-lilac-dark text-center mb-2">
          {t('title')}
        </h1>
        <p className="text-2xl font-bold text-lilac-dark text-center ">
          {t('subtitle1')}
        </p>
        <p className="text-lg font-bold text-lilac-dark text-center mb-8">
          {t('subtitle2')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => {
            const localizedTitle =
              post.title?.[locale] ?? 'Sem título';
            const localizedSlug =
              post.slug?.[locale] ?? '#';

            const dateStr = post.publishedAt
              ? new Intl.DateTimeFormat(
                  locale === 'pt' ? 'pt-BR' : locale,
                  { timeZone: 'UTC' }
                ).format(new Date(post.publishedAt))
              : 'Data não disponível';

            const categories = post.categories
              ?.map(cat => cat.title?.[locale] || '')
              .filter(Boolean);

            return (
              <div
                key={post._id}
                className="bg-backgroundWhite border border-lilac-light rounded-lg shadow transition-shadow hover:shadow-lg"
              >
                {post.mainImage?.asset?.url && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={
                        post.mainImage.alt || localizedTitle
                      }
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-foregroundBlack mb-2">
                    {localizedTitle}
                  </h2>

                  {post.author && (
                    <p className="text-sm text-foregroundBlack">
                      by {post.author}
                    </p>
                  )}

                  {categories && categories.length > 0 && (
                    <p className="text-sm text-lilac-dark mt-1">
                      {categories.join(', ')}
                    </p>
                  )}

                  <p className="text-sm text-green-dark mt-1">
                    {dateStr}
                  </p>

                  <Link
                    href={`/${locale}/blog/${localizedSlug}`}
                    className="inline-block mt-4 bg-green text-backgroundWhite font-medium px-4 py-2 rounded hover:bg-green-dark transition-colors duration-300"
                  >
                    {t('cta')}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
