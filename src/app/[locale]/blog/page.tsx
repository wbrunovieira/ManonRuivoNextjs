import { getPosts } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  _id: string;
  title: string;
  slug: string;
  mainImage: string;
  author: string;
  categories: { _id: string; title: string }[];
  publishedAt: string;
};

// Using any for props with ESLint disable
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blog = async (props: any) => {
  const { locale } = props.params;

  const posts: Post[] = await getPosts();

  console.log('posts', posts);

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div
            key={post._id}
            className="border p-4 rounded-lg"
          >
            {post.mainImage && (
              <Image
                src={post.mainImage}
                alt={post.title}
                width={300}
                height={300}
                className="object-cover"
              />
            )}
            <h2 className="text-2xl mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600">
              {post.author && `by ${post.author}`}
            </p>
            <p className="text-sm text-gray-500">
              {post.categories
                .map(category => category.title)
                .join(', ')}
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
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="text-blue-500"
            >
              Leia mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
