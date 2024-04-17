import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

function AppBar() {
  const Navigate = useNavigate()
  return (
    <div className="w-screen h-16 border-b-2 px-10 flex justify-between items-center">
      <div className="text-xl font-bold cursor-pointer" onClick={()=>{
        Navigate('/blogs')
      }}>Medium</div>
      <div className="flex space-x-5">
        <Link className="bg-green-500 px-4 py-1 rounded-2xl" to={"/publish"}>
          New Blog
        </Link>
        <Avatar name={"Punyakrit"} />
      </div>
    </div>
  );
}

export default AppBar;
