import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-found-normal block pl-3 pr-10 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-[#EB0043]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
