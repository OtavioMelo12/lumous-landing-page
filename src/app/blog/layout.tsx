import { MyBreadcrumb } from '@/components/MyBreadcrumb';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MyBreadcrumb />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default BlogLayout;
