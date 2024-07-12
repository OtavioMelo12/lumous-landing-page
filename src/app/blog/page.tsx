import dayjs from 'dayjs';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import { getPosts } from '../_services/notion';

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className=" container p-8 md:p-20 flex flex-col">
      <h1 className="text-2xl font-bold">
        Blog - Lumous Automação Residencial
      </h1>

      <div className="mt-8">
        <ul className="flex flex-col gap-6">
          {posts.map(post => (
            <li key={post.id}>
              <div className="flex flex-col">
                <p className="font-medium text-muted-foreground">
                  Publicado em: {dayjs(post.createdAt).format('DD/MM/YYYY')}
                </p>

                <Link
                  className="text-xl font-semibold hover:underline"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>

                <div className="flex gap-1 flex-wrap">
                  {post.tags.map(tag => {
                    return (
                      <Badge
                        className={cn(bgColorsMap[tag.color])}
                        key={tag.id}
                      >
                        {tag.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              <Separator className="mt-8" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const bgColorsMap = {
  blue: 'bg-blue-400 hover:bg-blue-500',
  brown: 'bg-yellow-800 hover:bg-yellow-900',
  default: 'bg-gray-300 hover:bg-gray-400',
  gray: 'bg-gray-400 hover:bg-gray-500',
  green: 'bg-teal-400 hover:bg-teal-500',
  orange: 'bg-orange-400 hover:bg-orange-500',
  pink: 'bg-pink-400 hover:bg-pink-500',
  purple: 'bg-purple-400 hover:bg-purple-500',
  red: 'bg-red-400 hover:bg-red-500',
  yellow: 'bg-yellow-400 hover:bg-yellow-500',
} as const;

export default BlogPage;
