import React from "react";

const EXPERIENCE: {
  present?: boolean;
  title: string;
  period: string;
  company: string;
  description?: string;
  projects?: { title: string; description: string; technologies?: string[] }[];
  technologies?: string[];
}[] = [
  {
    present: true,
    title: "Back-end Engineer",
    period: "Sep 2022 - ",
    company: "ZenDev",
    projects: [
      {
        title: "GreenFee365",
        description:
          "At first we were a big team, but after the cut-down only two of us stayed, my front-end colleague and me as a back-end engineer. Deep involvement in business logic and direct contact on daily basis with client, as a back-end developer, helped me upgrade and expand my knowledge and skills, technical and soft ones and learn a lot about web apps architecture.",
        technologies: [
          "Stripe",
          "Express",
          "Node",
          "Next",
          "MongoDB",
          "Mongoose",
          "MailJet",
          "TypeScript",
          "SOAP",
          "GraphQL",
          "REST",
          "Message Queue (Nats)",
          "Amadeus VCC",
          "Nium",
          "JavaScript",
          "JSX",
          "React",
          "SAAS",
          "Git",
          "Jira",
          "Render",
          "Docker",
          "Nats",
          "Sentry",
          "Github",
          "BitBucket",
        ],
      },
      {
        title: "Human Resource Planning App",
        description:
          "In-house project - continuing the project we started developing on internship.",
      },
    ],
  },
  {
    title: "Back-end Engineer - Internship",
    period: "Jul 2022 - Aug 2022",
    company: "ZenDev",
    description:
      "It was an in-house project, an app for human resource planning. Worked in a team of 4 developers, project manager and product owner. Been a very great experience working first time in that big team where everyone had their part. Definitely made me level-up my career.",
    technologies: [
      "REST",
      "Express",
      "Swagger",
      "JavaScript",
      "Node",
      "MongoDB",
      "Git",
      "Jira",
      "Productive.io API",
      "BitBucket",
    ],
  },
  {
    title: "Website Developer and Maintainer",
    period: "Sep 2021 - Jul 2022",
    company: "BOLD IT",
    description:
      "Developing and maintaining websites for companies and organizations using WordPress (custom code and plugins)",
    technologies: ["WordPress", "HTML", "CSS", "JS", "Elementor"],
  },
];

function Experience() {
  return (
    <div className="justify-center min-h-screen w-full flex flex-col" id="Experience">
      <h1 className="text-3xl">EXPERIENCE</h1>
      <div className="my-5 flex flex-col">
        {EXPERIENCE.map((exp) => (
          <div className="flex flex-row">
            <div className="flex w-10 justify-center content-center relative">
              <div className="border-r border-solid border-accent_lighter h-full"></div>
              <div
                className={`${
                  exp.present
                    ? "bg-accent"
                    : "bg-primary border border-accent_lighter"
                } w-3 h-3 rounded-full absolute mt-4`}
              ></div>
            </div>
            <div className="flex-1 pb-7">
              <div className="leading-3">
                <div className="text-xl">
                  {exp.title}
                  <span className="font-light opacity-80">
                    {" ("}
                    {exp.period}
                    {exp.present ? (
                      <span className="text-accent">present</span>
                    ) : (
                      ""
                    )}
                    {")"}
                  </span>
                </div>
                <div className="opacity-80">{exp.company}</div>
              </div>
              <div className="mt-2">
                <div className="text-sm font-light text-justify">
                  {exp.description}
                </div>
                {exp.projects && (
                  <div className="space-y-4 ">
                    {exp.projects?.map((project) => (
                      <div className="flex flex-col pl-2">
                        <div className="text-slate-400 leading-4">
                          {project.title}
                        </div>
                        <div className="text-sm font-light text-justify">
                          {project.description}
                        </div>
                        {project.technologies && (
                          <div className="flex flex-wrap mt-1 text-xs font-mono opacity-70 space-x-1">
                            {project.technologies?.map((tech) => (
                              <span className="rounded-md bg-[#293146] px-2 py-0.5 h-max mt-1">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {exp.technologies && (
                  <div className="flex flex-wrap mt-1 text-xs font-mono opacity-70 space-x-1">
                    {exp.technologies?.map((tech) => (
                      <span className="rounded-md bg-[#293146] px-2 py-0.5 h-max mt-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
