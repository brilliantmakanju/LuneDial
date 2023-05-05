"use client";
import Link from "next/link";
import { useState } from "react";
import RegCont from "../../components/models/register/Container";
import InputBox from "../../components/models/register/input";
import RegIput from "../../components/models/register/input";

const Register = () => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  return (
    <main
      className="h-screen flex  place-content-center lg:my-[10vh] px-2 z-[0] lg:h-[100%]  items-center gap-5 lg:py-20 bg-no-repeat bg-cover bg-right-bottom bg-fixed mx-1   "
      style={{
        backgroundImage: 'url("/wallpaperflare.com_wallpaper(107).jpg")',
      }}
    >
      <div className="flex flex-col items-center justify-start backdrop-blur-sm border-2 border-[yellow] gap-1 p-2  rounded-md md:rounded-l-md h-[550px] w-[400px] md:w-[400px]  ">
        <div className="text-center text-black my-5 ">
          <h3 className="text-[35px] font-extrabold  ">Register </h3>
          <p className="font-bold text-[15px]  ">Not yet a member? </p>
        </div>
        <form className="px-1 w-[350px] flex flex-col gap-5 items-center ">
          <InputBox disabled={false} value={""} type="text" placeholder="Username " required />
          <InputBox disabled={false} value={""} type="email" placeholder="Email" required />
          <InputBox disabled={false} value={""} type="password" placeholder="Password " required />
          <button className="p-2 rounded w-full text-black bg-[yellow]">
            Register
          </button>
        </form>
        <div className="flex flex-col items-center gap-5 my-7 ">
          <div className="w-full flex gap-5 items-center  px-5 font-bold text-black ">
            <hr className="h-1 w-32 rounded bg-[yellow]" />
            OR
            <hr className="h-1 w-32 rounded bg-[yellow]" />
          </div>
          <Link
            href="register"
            className="p-2 rounded w-[60%] font-bold  text-center  text-black bg-[yellow] "
          >
            Sigup with Google
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2 items-start  px-5 font-bold text-black ">
          <div className="w-full flex gap-5 justify-between items-center text-[15px]   font-bold text-black">
            <p>Already a member? </p>
            <Link
              href="login"
              className="p-2 rounded font-bold  text-center  text-gray-900 bg-[yellow]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
