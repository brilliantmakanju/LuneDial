<nav className="flex justify-between items-center w-full py-[10px] h-[4rem]  md:h-[5rem]  pl-[10px] overflow-hidden pr-[12px] md:px-[30px] bg-[#fffef7b3] font-bold font-sans ">
        <div className="relative text-[25px] text-[#000000] md:text-[30px] ">
          {/* <Image
            fill
            className="absolute top-0 left-0 "
            src={"/logo/logoFull.png"}
            alt={"Nav Logo"}
          /> */}
          <h3>LuneDial</h3>
        </div>
        <ul className="list-none  items-center hidden md:flex md:text-[20px] md:gap-4 lg:gap-6 xl:gap-9 ">
          {navItem.map((value, index) => (
            <NavItem key={index} dest={value.dest} href={value.href} />
          ))}
        </ul>
        <NavCTA
          active="Login"
          secondary="Signup"
          activeHref="/login"
          secondaryHref="/sign"
        />
        <button
          onClick={() => setMobile(!mobile)}
          className=" flex flex-col-reverse gap-1 justify-start items-start text-center md:hidden"
        >
          <div className="w-[22px] h-[6px] bg-black " />
          <div className="w-[32px] h-[6px] bg-black " />
          <div className="w-[42px] h-[6px] bg-black " />
        </button>
      </nav>
      <div
        className={`${
          mobile
            ? "fixed right-0 top-0 w-full h-screen bg-[#16181f] opacity-80  z-[20] "
            : "fixed right-[-300px] opacity-0 "
        } fixed right-0 w-full duration-300 ease-in-out  `}
      ></div>
      <div
        className={`${
          mobile
            ? "fixed left-0 top-0 w-[50%] h-screen opacity-90 z-[21] "
            : "fixed left-[-3000px] opacity-0 "
        } duration-500 ease-in-out  pt-[90px] flex flex-col gap-[150px] z-[19]  fixed left-0 top-0 w-[70%]  text-black h-screen bg-[#fffffd92] px-4 py-4 md:hidden`}
      >
        <button
          className={`md:hidden p-3 px-5 rounded-md  absolute top-5 right-4 font-bold`}
          onClick={() => setMobile(!mobile)}
        >
          X
        </button>
        <div className="flex flex-col gap-3 text-white h-[20px]  ">
          <h3
            className={`text-white flex justify-between items-center font-bold text-2xl font-serif tracking-wide `}
          >
            Lunedial
          </h3>
          <p className="text-md tracking-tighter pr-4 "></p>
        </div>
        <div className="flex items-center justify-between ">
          <ul className="text-white flex flex-col text-left justify-around font-bold items-start place-content-start ml-[20px] gap-7 "></ul>
          <Link
            href="register"
            className="flex absolute bottom-20 left-3 justify-center items-center p-3 w-[15em] border-[2.5px]   font-bold rounded-full "
            onClick={() => setMobile(!mobile)}
          >
            Join Us
          </Link>
        </div>
      </div>