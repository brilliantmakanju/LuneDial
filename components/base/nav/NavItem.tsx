import Link from "next/link";
import React from "react";

interface NavItemProps {
  dest: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ dest, href }) => {
  return (
    <>
        <li><Link href={href} >{dest}</Link></li>
    </>
  );
};

export default NavItem;
