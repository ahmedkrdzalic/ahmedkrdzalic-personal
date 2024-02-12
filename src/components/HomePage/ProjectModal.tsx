"use client";

import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { IProject } from "./Projects";

function ProjectModal({
  project,
  setProject,
  onClick,
}: {
  project: IProject;
  setProject: Dispatch<SetStateAction<IProject | undefined>>;
  onClick: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className=" 
    fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center
  "
      onClick={() => {
        setProject(undefined);
        onClick(false);
      }}
    >
      <div
        className="
        bg-white p-10 rounded-md text-black 
      "
      >
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div>
          {project.technologies.map((tech, i) => (
            <span key={i}>{tech}, </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
