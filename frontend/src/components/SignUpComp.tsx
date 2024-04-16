import { SignUpInput } from "@punyakrit/medium-common";
import { useState } from "react";
import LabelInput from "./UI/LabelInput";
import { Link } from "react-router-dom";

function SignUpComp() {
    const [postInput, setPostInput] = useState<SignUpInput>({
        name: "",
        username: "",
        password: "",
      });
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className=" text-3xl font-bold">
        Create an Account 
      </div>
      <div className="text-gray-500 py-2">
       
          Already have an Account ?{" "}
        <Link
          to={"/signin"}
          className="text-black pl-2 underline"
        >
          Login
        </Link>
      </div>
      <div className="w-full max-w-md my-4">
        <LabelInput
          label={"Name"}
          placeholder={"John Doe"}
          onChange={(e: any) => {
            setPostInput({
              ...postInput,
              name: e.target.value,
            });
          }}
        />
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
         Signup
        </button>
      </div>
    </div>
  )
}

export default SignUpComp
