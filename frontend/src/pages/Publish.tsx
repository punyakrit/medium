import { useState } from "react";
import AppBar from "../components/UI/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

function Publish() {
    const Navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    async function buttonHandler(){
        try{
         await axios.post(`${BACKEND_URL}/api/v1/blog/create`,
        {
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }) 
        Navigate('/blogs')

    }catch{
        alert('error')
    }

    }
  return (
    <div className="">
      <AppBar />
      <div className="px-20 flex flex-col justify-center mt-20 w-screen">
        <input
          className=" w-full  border rounded-2xl p-2"
          placeholder="title..."
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        <textarea
          className=" w-full  border rounded-2xl p-2 my-6"
          placeholder="Enter content"
          onChange={(e)=>{setContent(e.target.value)}}

        />
        <div>

        <button className="bg-green-500 px-7 text-white py-3 rounded-2xl flex"
        onClick={buttonHandler}
        >
          Publish Blog
        </button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
