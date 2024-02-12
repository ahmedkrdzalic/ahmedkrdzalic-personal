import React from "react";

const techImgs = [
  {
    src: "/technologies/javascript.png",
    alt: "javascript",
    title: "Javascript",
  },
  {
    src: "/technologies/typescript.png",
    alt: "typescript",
    title: "Typescript",
  },
  {
    src: "/technologies/nodejs.png",
    alt: "nodejs",
    title: "Node.js",
  },
  {
    src: "/technologies/react.png",
    alt: "react",
    title: "React",
  },
  {
    src: "/technologies/mongodb.png",
    alt: "mongodb",
    title: "MongoDB",
  },
  {
    src: "/technologies/tailwindcss.png",
    alt: "tailwindcss",
    title: "TailwindCSS",
  },
  {
    src: "/technologies/nextjs.png",
    alt: "nextjs",
    title: "NextJS",
  },
];

function TechImg({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div>
      <img src={src} alt={alt} title={title} className="h-full" />
    </div>
  );
}

function Intro() {
  return (
    <div
      className="justify-center min-h-screen w-full flex flex-col "
      id="About"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="py-6 flex-1 flex-col w-full">
          <h1 className="text-3xl">ABOUT</h1>
          <h2 className="text-sm font-light text-accent_lighter">Who?</h2>
          <div className="space-y-3 mt-3 flex flex-col">
            <div className="flex-shrink space-y-3">
              <p>
                Software engineer with a passion for creating functional and
                beautiful Web Apps. Solving problems, automating boring tasks
                and increasing business value is what drives me the most.
              </p>
              <p>
                {`Typescript and JS (Node.js) are my biggest strengths, but I have also
                  worked with Python, and with technologies such as React, NextJS,
                  Tailwind, Redis, MongoDB and many many other.`}
              </p>
            </div>
            <div className="w-full h-10 flex space-x-1">
              {techImgs.map((img, i) => (
                <TechImg {...img} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 h-max">
          <img src="/wordcloud.png" alt="wordcloud" className="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
