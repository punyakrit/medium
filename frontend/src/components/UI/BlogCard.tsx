import { Link } from "react-router-dom";

interface BlogCardProps {
  authName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number
}

function BlogCard({ authName, title, content, publishedDate,id }: BlogCardProps) {
  console.log(id)
  return (
    <Link to={`/blogs/${id}}`}>
    <div className="flex flex-col border-b-2 pb-4 mt-4 w-min-md cursor-pointer">
      <div className="flex items-center text-sm">
        <Avatar name={authName} />
        <span className="font-normal mx-2">{authName}</span> .{" "}
        <span className="mx-2 font-light text-gray-400">{publishedDate}</span>
      </div>
      <div className="text-3xl font-bold">{title}</div>
      <div className="pt-2">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </div>
      <div className="text-slate-400 text-sm pt-4">
        {`${Math.ceil(content.length / 100)} minutes read`}
      </div>
    </div>
    </Link>
  );
}

export function Avatar({ name }: any) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-600 rounded-full ">
      <span className="font-medium text-gray-300 ">{name.slice(0, 2)}</span>
    </div>
  );
}

export default BlogCard;
