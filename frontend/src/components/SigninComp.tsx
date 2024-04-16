import { SignIpInput } from "@punyakrit/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "./UI/LabelInput";
import axios from "axios";
import { BACKEND_URL } from "../../config";

function SigninComp() {
  const Navigate = useNavigate();

    const [postInput, setPostInput] = useState<SignIpInput>({
        username: "",
        password: "",
      });

      async function callBack() {
        try {
          const res = await axios.post(
            `${BACKEND_URL}/api/v1/user/signin`,
            postInput
          );
          const token = res.data;
          localStorage.setItem("token", token);
          Navigate("/blogs");
        } catch (e) {
          console.log(e);
        }
      }

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className=" text-3xl font-bold">
        Login to Account
      </div>
      <div className="text-gray-500 py-2">
       
          Don't have an Account ?{" "}
        <Link
          to={"/signup"}
          className="text-black pl-2 underline"
        >
          Signup
        </Link>
      </div>
      <div className="w-full max-w-md my-4">
        
        <LabelInput
          label={"Username"}
          placeholder={"@JohnDoe"}
          onChange={(e: any) => {
            setPostInput({
              ...postInput,
              username: e.target.value,
            });
          }}
        />
        <LabelInput
          label={"Password"}
          placeholder={"Password"}
          type={"password"}
          onChange={(e: any) => {
            setPostInput({
              ...postInput,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button onClick={callBack} className=" bg-slate-200 px-9 rounded-2xl font-semibold border-2 border-black py-3">
         Login
        </button>
      </div>
    </div>
  )
}

export default SigninComp
