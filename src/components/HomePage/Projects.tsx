"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useSearchParams } from "next/navigation";

export interface IProject {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
}

const projects: IProject[] = [
  {
    slug: "vezeerko",
    name: "Vezeerko",
    description: "Tourist App",
    technologies: ["Node", "React", "Next", "MongoDB", "TypeScript"],
  },
  {
    slug: "menu-app",
    name: "Menu APP",
    description: "Online restaurant menu with the admin panel",
    technologies: ["Node", "React", "Express", "MySQL"],
  },
];

export default function Projects() {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);

  const queryParams = useSearchParams();
  const projectSlug = queryParams.get("project");

  const [project, setProject] = useState(
    projects.find((project) => {
      const cond = project.slug === projectSlug;
      console.log(cond);
      return cond;
    })
  );

  return (
    <div
      className="justify-center min-h-screen w-full flex flex-col"
      id="Projects"
    >
      <h1 className="text-3xl">PROJECTS</h1>
      <h2 className="text-sm font-light text-accent_lighter">What?</h2>

      <div className="my-5 flex flex-col space-y-4">
        {projects.map((project, i) => (
          <ProjectCard
            slug={project.slug}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            setOpenProjectModal={setOpenProjectModal}
            setProject={setProject}
            key={i}
          />
        ))}
      </div>
      {openProjectModal && project ? (
        <ProjectModal
          project={project}
          onClick={setOpenProjectModal}
          setProject={setProject}
        />
      ) : null}
    </div>
  );
}
