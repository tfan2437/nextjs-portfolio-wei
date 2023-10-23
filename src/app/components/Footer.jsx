import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mx-auto w-[1536px] z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container pb-10 flex justify-between">
        <Image
          src="/images/wei-logo-small.png"
          width={137}
          height={26}
          alt="Wei Logo"
        />
        <p className="text-[#ffffff] font-thin">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
