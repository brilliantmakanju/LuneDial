// import RegIput from "./input";

interface RegContProps {
  disabled: boolean;
  title: string;
  back: boolean;
  forward: boolean;
}

const RegCont: React.FC<RegContProps> = ({
  disabled,
  title,
  back,
  forward,
}) => {
  return (
    <section
      className={`${
        disabled
          ? "hidden"
          : "flex flex-col items-start gap-5 mx-[auto]   relative "
      }`}
    >
      {/* <RegIput type="text" placeHolder="Full Name" value="" disabled={false} /> */}

      <span className="font-bold text-[30px] text-[#dddd0f] ml-4 titleContent  ">
        {title}
      </span>
      {/* <div className="flex justify-between items-center gap-10 w-full px-[10px] absolute bottom-2 ">
        {back ? (
          <>
            <button
              className={
                "bg-[yellow] font-bold  outline-none flex justify-center items-center text-center py-[15px] px-[50px] border-2 font-mono border-white rounded-full "
              }
            >
              Back
            </button>
          </>
        ) : (
          <></>
        )}
        {forward ? (
          <>
            <button
              className={
                "bg-[yellow] font-bold  outline-none flex justify-center items-center text-center py-[15px] px-[50px] border-2 font-mono border-white rounded-full "
              }
            >
              Next
            </button>
          </>
        ) : (
          <></>
        )}
      </div> */}
    </section>
  );
};

export default RegCont;
