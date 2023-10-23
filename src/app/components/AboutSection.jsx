"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frond-End",
    id: "frond-end",
    content: (
      <ul className="list-square pl-2 ml-2">
        <li>Next.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Tailwind</li>
        <li>Sass</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Git</li>
        <li>Figma</li>
        <li>UI/UX Design</li>
      </ul>
    ),
  },
  {
    title: "Back-End",
    id: "back-end",
    content: (
      <ul className="list-square pl-2 ml-2">
        <li className="">Java</li>
        <li className="">Express.js</li>
        <li className="">Next API Routes</li>
        <li className="">NextAuth.js</li>
        <li className="">MongoDB</li>
        <li className="">MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-square pl-2 ml-2">
        <li>Cornell University B.Arch</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frond-end");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:pr-8">
        <Image
          src="/images/mining-house-s.jpg"
          width={600}
          height={600}
          alt="img"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-heavy text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="font-thin text-base lg:text-lg">
            I am a dedicated self-taught web developer, driven by an unwavering
            passion for crafting immersive and adaptable web applications. I
            have project experience working with JavaScript, React, Next.js,
            Node.js, Express, MongoDB, Tailwind, Sass, and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frond-end")}
              active={tab === "frond-end"}
            >
              {" "}
              Frond-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("back-end")}
              active={tab === "back-end"}
            >
              {" "}
              Back-End{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
