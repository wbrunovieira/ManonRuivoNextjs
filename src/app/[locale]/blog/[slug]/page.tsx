// app/[locale]/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import type {
  Locale,
  Post,
  Category,
  BlockContent,
} from '@/types/sanity';
import SavePostId from '@/components/SavePostId';

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
  const post: Post | null = await getPostBySlug(
    slug,
    locale
  );

  if (!post) {
    notFound();
  }

  const localizedTitle =
    post.title?.[locale] ?? 'Sem título';
  const dateStr = post.publishedAt
    ? new Intl.DateTimeFormat(
        locale === 'pt' ? 'pt-BR' : locale,
        {
          timeZone: 'UTC',
        }
      ).format(new Date(post.publishedAt))
    : 'Data não disponível';

  const categories = post.categories?.map(
    (cat: Category) => {
      return cat.title?.[locale] ?? 'Sem título';
    }
  );
  const blocks: BlockContent = post.body?.[locale] ?? [];

  return (
    <article className="container mx-auto px-4 py-8">
      <SavePostId postId={post._id} />
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {localizedTitle}
        </h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
          {post.author && (
            <span className="mr-2">by {post.author}</span>
          )}
          <span className="mr-2">|</span>
          <time dateTime={post.publishedAt || ''}>
            {dateStr}
          </time>
        </div>
        {categories && categories.length > 0 && (
          <p className="text-sm text-gray-500">
            Categorias: {categories.join(', ')}
          </p>
        )}
      </header>

      {post.mainImage?.asset?.url && (
        <figure className="mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || localizedTitle}
            width={300}
            height={300}
            className="object-cover w-full h-auto rounded-lg"
          />
          {post.mainImage.alt && (
            <figcaption className="text-center text-xs text-gray-500 mt-2">
              {post.mainImage.alt}
            </figcaption>
          )}
        </figure>
      )}

      <section className="prose max-w-none mb-8">
        <PortableText value={blocks} />
      </section>

      <footer>
        <Link
          href={`/${locale}/blog`}
          className="text-blue-600 hover:underline"
        >
          &larr; Voltar para o Blog
        </Link>
      </footer>
    </article>
  );
}
