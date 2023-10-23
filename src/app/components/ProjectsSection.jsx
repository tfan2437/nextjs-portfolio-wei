"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Blog Website",
    description: "Godziilu - An Illustration Design Studio",
    image: "/images/projects/project-card-godzillu.jpg",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/tfan2437/nextjs-godzillu",
    previewUrl: "https://www.godzillu.com",
  },
  {
    id: 2,
    title: "Next.js Prompt Community Website",
    description: "Promptopia - The AI Prompt Sharing Platform",
    image: "/images/projects/project-card-promptopia.jpg",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/tfan2437/nextjs-promt-sharing",
    previewUrl: "https://tf-prompt.com",
  },
  {
    id: 3,
    title: "Next.js Portfolio Website",
    description: "Ting Wei Fan's Portfolio ",
    image: "/images/projects/project-card-portfolio.jpg",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/tfan2437/nextjs-portfolio-wei",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Next.js Travel Landing Page",
    description: "Hilink - Travel & Camping Guide Website",
    image: "/images/projects/project-card-hilink.jpg",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/tfan2437/nextjs-hilink-camping",
    previewUrl: "https://hilink-camping.vercel.app",
  },
  {
    id: 5,
    title: "React E-Commerce Landing Page",
    description: "Nike - E-Commerce Landing Page",
    image: "/images/projects/project-card-nike.jpg",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/tfan2437/react-nike-off-white",
    previewUrl: "https://nike-off-white.netlify.app",
  },
  {
    id: 6,
    title: " VanillaJS Feeding Page",
    description: "Twirrer - Statcic Social Media Feeding Page",
    image: "/images/projects/project-card-twirrer.jpg",
    tag: ["All", "Front End"],
    gitUrl: "https://github.com/tfan2437/javascript-twirrer",
    previewUrl: "https://twirrer-feed.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-[80px]">
      <div className="flex flex-row justify-between item-center">
        <div>
          <h2 className="font-found-heavy text-4xl font-bold text-white mt-4 mb-8 md:mb-5">
            My Projects
          </h2>
        </div>
        <div className="text-white justify-end flex flex-row items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Full Stack"
            isSelected={tag === "Full Stack"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Front End"
            isSelected={tag === "Front End"}
          />
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
