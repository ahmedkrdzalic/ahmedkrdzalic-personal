import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    name: "Vezeerko",
    description: "Tourist App",
    technologies: ["Node", "React", "Next", "MongoDB", "TypeScript"],
  },
  {
    name: "Menu APP",
    description: "Online restaurant menu with the admin panel",
    technologies: ["Node", "React", "Express", "MySQL"],
  },
];

function ProjectCard({
  name,
  description,
  technologies,
}: {
  name: string;
  description: string;
  technologies: string[];
}) {
  return (
    <div className={`${styles.box}`}>
      <div className={`${styles.div_inside}`}></div>
      <div className={`${styles.content}`}>
        <h3 className="text-xl text-accent leading-4"> {name} </h3>
        <div className="text-sm font-extralight leading-5">{description}</div>
        <div className="flex flex-wrap text-xs font-mono opacity-70 space-x-1">
          {technologies?.map((tech) => (
            <span className="rounded-md bg-[#293146] px-2 py-0.5 h-max">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div
      className="justify-center min-h-screen w-full flex flex-col"
      id="Projects"
    >
      <h1 className="text-3xl">PROJECTS</h1>
      <h2 className="text-sm font-light text-accent_lighter">What?</h2>

      <div className="my-5 flex flex-col space-y-4">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
