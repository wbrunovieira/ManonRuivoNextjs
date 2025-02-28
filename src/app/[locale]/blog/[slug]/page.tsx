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
        { timeZone: 'UTC' }
      ).format(new Date(post.publishedAt))
    : 'Data não disponível';

  const categories = post.categories?.map(
    (cat: Category) => {
      return cat.title?.[locale] ?? 'Sem título';
    }
  );

  const blocks: BlockContent = post.body?.[locale] ?? [];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        {localizedTitle}
      </h1>

      <div className="text-gray-600 mb-2">
        {post.author && <span>by {post.author} </span>}
        {' | '}
        <span>{dateStr}</span>
      </div>

      {categories && categories.length > 0 && (
        <p className="text-sm text-gray-500 mb-4">
          Categorias: {categories.join(', ')}
        </p>
      )}

      {post.mainImage?.asset?.url && (
        <div className="mb-4">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || localizedTitle}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <article>
          <PortableText value={blocks} />
        </article>
      </div>

      <Link
        href={`/${locale}/blog`}
        className="text-blue-500"
      >
        &larr; Voltar para o Blog
      </Link>
    </div>
  );
}
