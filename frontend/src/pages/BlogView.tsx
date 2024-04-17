import AppBar from "../components/UI/AppBar";
import BlogCard from "../components/UI/BlogCard";
import { useBlogs } from "../hooks";

function BlogView() {
  const { loading } = useBlogs();

  return (
    <div className="w-screen">
      <AppBar />
      <div className="flex justify-center">
        <div className="w-3/5 ">
          {loading ? (
            <div className="flex flex-col justify-center">
              <Load />
              <Load />
              <Load />
              <Load />
            </div>
          ) : (
            <ShowBlogs />
          )}
        </div>
      </div>
    </div>
  );
}

function Load() {
  return (
    <div role="status" className="max-w-sm animate-pulse mt-10">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function ShowBlogs() {
  const { blogs } = useBlogs();

  return (
    <div>
      {blogs.map((blog, _key) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          authName={blog.author.username}
          title={blog.title}
          content={blog.content}
          publishedDate="1 Jan 2024"
        />
      ))}
    </div>
  );
}

export default BlogView;
