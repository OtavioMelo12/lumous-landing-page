import ReactMarkdown from 'react-markdown';

import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';

import { getPost } from '@/app/_services/notion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

import { bgColorsMap } from '../page';

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <div className="pt-4 container mb-20 max-w-[800px]">
      <ReactMarkdown
        className={'flex flex-col gap-4'}
        components={{
          h1: ({ ...props }) => (
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 flex-wrap">
                {post?.tags.map(tag => {
                  return (
                    <Badge className={cn(bgColorsMap[tag.color])} key={tag.id}>
                      {tag.name}
                    </Badge>
                  );
                })}
              </div>

              <p className="text-muted-foreground flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                Publicado em: {dayjs(post?.createdAt).format('DD/MM/YYYY')}
              </p>

              <h1 {...props} className="text-2xl md:text-3xl font-bold">
                {props.children}
              </h1>

              <div className="flex gap-1 items-center">
                <Avatar className="max-h-6 max-w-6">
                  <AvatarImage
                    alt="@_otavio_melo"
                    src={
                      post?.author.avatar_url ||
                      'https://github.com/OtavioMelo12.png'
                    }
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground">
                  {post?.author.name}
                </span>
              </div>
            </div>
          ),
          h2: ({ ...props }) => (
            <h2 {...props} className="text-xl font-bold">
              {props.children}
            </h2>
          ),
        }}
      >
        {post?.content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPostPage;
