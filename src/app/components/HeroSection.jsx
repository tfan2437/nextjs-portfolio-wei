"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-10 md:mx-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-heavy">
            <span className="font-heavy text-transparent bg-clip-text bg-gradient-to-r from-[#EB0043] to-[#3342ED]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Wei",
                1000,
                "Architect",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-heavy"
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p> */}
          <div>
            <Link
              href="/#contact"
              className="font-found-bold px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#EB0043] to-[#3342ED] hover:bg-slate-500 text-white hover:text-[#000000]"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1sw9CAdrUjnAvhbNy6e6afCxClq3Aqyi2/view?usp=share_link
              "
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#EB0043] to-[#3342ED] text-white mt-3"
            >
              <span className="font-found-bold block bg-[#000000] hover:bg-[#3342ED] hover:text-[#000000] rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#00000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/wei-avatar.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
