import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';

import { AboutMe } from '@/components/AboutMe';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import { getPosts } from '../_services/notion';

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="p-4 md:p-12 flex flex-col container mb-20">
      <h1 className="mb-4 text-xl font-bold">Blog - Lumous</h1>
      <div className="flex flex-wrap-reverse w-full justify-between gap-8">
        <ul className="flex flex-col gap-6">
          {posts.map(post => (
            <li key={post.id}>
              <div className="flex flex-col gap-0.5 max-w-[700px]">
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

                <p className="text-muted-foreground flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                  Publicado em: {dayjs(post.createdAt).format('DD/MM/YYYY')}
                </p>

                <Link
                  className="text-xl font-semibold hover:underline"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>

                <div>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Avatar className="max-h-6 max-w-6">
                      <AvatarImage
                        alt="@_otavio_melo"
                        src={
                          post.author.avatar_url ||
                          'https://github.com/OtavioMelo12.png'
                        }
                      />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    {post.author.name}
                  </p>
                </div>
              </div>
              <Separator className="mt-8" />
            </li>
          ))}
        </ul>

        <AboutMe />
      </div>
    </div>
  );
};

export const bgColorsMap = {
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
