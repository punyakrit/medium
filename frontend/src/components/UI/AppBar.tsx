import { Avatar } from "./BlogCard";

function AppBar() {
  return (
    <div className="w-screen h-16 border-b-2 px-10 flex justify-between items-center">
      <div className="text-xl font-bold">Medium</div>
      <div>
        <Avatar name={"Punyakrit"} />
      </div>
    </div>
  );
}

export default AppBar;
