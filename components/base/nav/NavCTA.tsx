import Link from "next/link";

interface NavCTAProps {
  active: string;
  secondary: string;
  activeHref: string;
  secondaryHref: string;
}

const NavCTA: React.FC<NavCTAProps> = ({
  active,
  activeHref,
  secondary,
  secondaryHref,
}) => {
  return (
    <div className="hidden gap-3 md:flex justify-center items-center mb-[10px] ">
      {/* { Active CTA } */}
      <Link
        href={activeHref}
        className="border-2 border-gray-800 py-[13px] rounded-md px-[20px] duration-300 transition ease-in-out hover:border-yellow-400 hover:bg-[#ffff00d2] hover:text-black "
      >
        {active}
      </Link>
      {/* { UnActive CTA } */}
      <Link
        href={secondaryHref}
        className="text-white bg-gray-800 py-[13px] rounded-md px-[20px] duration-300 transition ease-in-out hover:bg-[#ffff00d2] hover:text-gray-800   "
      >
        {secondary}
      </Link>
    </div>
  );
};

export default NavCTA;
