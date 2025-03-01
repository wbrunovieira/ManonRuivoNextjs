// app/[locale]/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import {
  FaUser,
  FaRegCalendarAlt,
  FaTags,
  FaArrowLeft,
} from 'react-icons/fa';
import type {
  Locale,
  Post,
  Category,
  BlockContent,
} from '@/types/sanity';
import SavePostId from '@/components/SavePostId';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

interface BlogDetailPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'blogDetail',
  });

  const post: Post | null = await getPostBySlug(
    slug,
    locale
  );

  if (!post) {
    notFound();
  }

  const localizedTitle =
    post.title?.[locale] ?? t('noTitle');

  const dateStr = post.publishedAt
    ? new Intl.DateTimeFormat(
        locale === 'pt' ? 'pt-BR' : locale,
        {
          timeZone: 'UTC',
        }
      ).format(new Date(post.publishedAt))
    : t('noDate');

  const categories = post.categories?.map(
    (cat: Category) =>
      cat.title?.[locale] ?? t('noCategory')
  );
  const blocks: BlockContent = post.body?.[locale] ?? [];

  return (
    <article className="container mx-auto px-4 py-8 mt-16 text-center max-w-4xl">
      <SavePostId postId={post._id} />

      <header className="mb-8">
        <h1 className="text-5xl font-extrabold text-lilac-dark mb-4 drop-shadow-sm">
          {localizedTitle}
        </h1>

        <div className="flex flex-col items-center gap-2 text-sm text-gray-600 mb-2">
          {post.author && (
            <p className="flex items-center gap-1">
              <FaUser className="text-green" />
              <span>
                {t('by')} {post.author}
              </span>
            </p>
          )}
          <time
            dateTime={post.publishedAt || ''}
            className="flex items-center gap-1"
          >
            <FaRegCalendarAlt className="text-green" />
            {dateStr}
          </time>
        </div>

        {categories && categories.length > 0 && (
          <p className="flex justify-center items-center gap-2 text-sm text-lilac-dark">
            <FaTags className="text-green" />
            {t('categories')}:
            <span className="text-gray-500">
              {categories.join(', ')}
            </span>
          </p>
        )}

        <div className="mx-auto my-6 h-0.5 w-16 bg-green rounded-full" />
      </header>

      {post.mainImage?.asset?.url && (
        <figure className="mb-8 flex justify-center">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || localizedTitle}
            width={300}
            height={300}
            className="object-cover h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </figure>
      )}

      <section className="prose prose-lg mx-auto max-w-2xl mb-8 text-justify leading-relaxed text-gray-800">
        <PortableText value={blocks} />
      </section>

      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green text-white font-semibold rounded transition-colors duration-300 hover:bg-green/80"
      >
        <FaArrowLeft />
        <span>{t('backToBlog')}</span>
      </Link>
    </article>
  );
}
