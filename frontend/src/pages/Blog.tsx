import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import AppBar from "../components/UI/AppBar";
import { Avatar } from "../components/UI/BlogCard";

function Blog() {
  const { id } = useParams();
  const { loading, blog }: any = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="w-full flex px-12 pt-12">
        <div className="w-2/3">
          <div className="text-4xl font-bold">{blog.title}</div>
          <div className="text-sm text-slate-400">Posted on 1 Jan 2024</div>
          <div className="py-4">{blog.content}</div>
        </div>

        <div className="w-1/3">
          <div className="text-sm text-slate-500">Author</div>
          <div className="mt-4">
            <Avatar name={blog.author.username} />{" "}
            <span className="text-xl ml-2 font-semibold">{blog.author.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
