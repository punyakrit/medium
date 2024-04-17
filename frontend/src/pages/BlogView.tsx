import AppBar from "../components/UI/AppBar";
import BlogCard from "../components/UI/BlogCard";
import { useBlogs } from "../hooks";

function BlogView() {
  const {loading, blogs} = useBlogs()

  if(loading){
    return(
      <div>
        loading ...
      </div>
    )
  }

  return (
    <div className="w-screen">
      <AppBar />
      <div className="flex justify-center">
        <div className="w-3/5 ">
          {blogs.map((blog, _key)  => <BlogCard
          key ={blog.id}
            id = {blog.id}
            authName={blog.author.username}
            title={blog.title}
            content={blog.content}
            publishedDate="1 Jan 2024"
          />)}
          
          
        </div>
      </div>
    </div>
  );
}

export default BlogView;
