"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./Projects.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IProject } from "./Projects";

export default function ProjectCard({
  slug,
  name,
  description,
  technologies,
  setOpenProjectModal,
  setProject,
}: {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  setOpenProjectModal: Dispatch<SetStateAction<boolean>>;
  setProject: Dispatch<SetStateAction<IProject | undefined>>;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`${styles.box}`}
      onClick={() => {
        router.push(pathname + "?" + "project=" + slug, {
          scroll: false,
        });

        setProject({ slug, name, description, technologies });
        setOpenProjectModal(true);
      }}
    >
      <div className={`${styles.div_inside}`}></div>
      <div className={`${styles.content}`}>
        <h3 className="text-xl text-accent leading-4"> {name} </h3>
        <div className="text-sm font-extralight leading-5">{description}</div>
        <div className="flex flex-wrap text-xs font-mono opacity-70 space-x-1">
          {technologies?.map((tech, i) => (
            <span key={i} className="rounded-md bg-[#293146] px-2 py-0.5 h-max">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
