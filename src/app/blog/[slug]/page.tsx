import ReactMarkdown from 'react-markdown';

import { getPost } from '@/app/_services/notion';

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  return (
    <div className="min-h-screen container p-8 max-w-[1000px]">
      <ReactMarkdown
        className={'flex flex-col gap-4'}
        components={{
          h1: ({ ...props }) => (
            <h1 {...props} className="text-3xl font-bold">
              {props.children}
            </h1>
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
