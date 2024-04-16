import { SignIpInput } from "@punyakrit/medium-common";
import { useState } from "react";
import { Link } from "react-router-dom";
import LabelInput from "./UI/LabelInput";

function SigninComp() {
    const [postInput, setPostInput] = useState<SignIpInput>({
        username: "",
        password: "",
      });
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
        <button className=" bg-slate-200 px-9 rounded-2xl font-semibold border-2 border-black py-3">
         Login
        </button>
      </div>
    </div>
  )
}

export default SigninComp
