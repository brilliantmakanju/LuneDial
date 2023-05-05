import Link from "next/link";
import Logo from "./Logo";

const Container = () => {
  return (
    <div>
      <Link
        href={"/"}
        className="absolute top-[10px] right-[20px] lg:top-[10px] "
      >
        I'm already a member?
      </Link>
      <Logo
        logo="LuneDial"
        motto="You know who you are and what you want "
        copyWrite="Now let's find it together."
        href="register"
        click="I'm ready"
      />
    </div>
  );
};

export default Container;
