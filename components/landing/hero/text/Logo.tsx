"use client";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  logo: string;
  motto: string;
  copyWrite: string;
  href: string;
  click: string;
}

const Logo: React.FC<LogoProps> = ({ logo, motto, copyWrite, href, click }) => {
  const [scrolls, setScrolls] = useState(0);

  function scrollPro() {
    if (scrolls === 100) {
      setScrolls(0);
    } else {
      setScrolls(scrolls + 10);
    }
  }

  return (
    <div className="flex flex-col gap-8 justify-center items-center  ">
      <h2 className="text-[45px] font-mono ">{logo}</h2>
      <h4 className="text-[25px] font-mono w-[90%] flex justify-center items-center text-center ">
        {motto}
      </h4>
      <p className="text-[35px] font-mono w-[80%] flex justify-center items-center text-center">
        {copyWrite}
      </p>
      <Link
        href={href}
        onClick={() => scrollPro()}
        className={
          "bg-slate-800 outline-none flex justify-center items-center text-center py-[15px] px-[125px] border-2 font-mono border-white rounded-full "
        }
      >
        {" "}
        Find Love
      </Link>
    </div>
  );
};

export default Logo;
