import type { ReactElement } from "react";
import { FaReact, FaSpotify } from "react-icons/fa";
import {
  SiMui,
  SiGooglemaps,
  SiAntdesign,
  SiTypescript,
  SiVite,
  SiExpress,
  SiFlask,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { ChartJsIcon } from "../assets/ChartJsIcon.tsx";

export const Projects = () => {
  const projects: {
    name: string;
    description: string;
    skills: { icon: ReactElement; name: string }[];
  }[] = [
    {
      name: "Wander",
      description:
        "A web app that generates a personalized music playlist for a user's road or plane trip from travel destination and music preferences determined through a preference quiz and the user's Spotify data.",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiMui />, name: "Materials UI" },
        { icon: <IoLogoFirebase />, name: "Firebase" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <FaSpotify />, name: "Spotify API" },
        { icon: <SiGooglemaps />, name: "Google Maps API" },
      ],
    },

    {
      name: "Statify",
      description:
        "Summarize your spotify listening activity by top artists, tracks, and genres",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <SiMui />, name: "Material UI" },
        {
          icon: <ChartJsIcon />,
          name: "Chart.js",
        },
        { icon: <SiExpress />, name: "ExpressJS" },
        { icon: <FaSpotify />, name: "Spotify API" },
      ],
    },
    {
      name: "Personal Website v1",
      description:
        "My (old) personal website to showcase my skill, experiences, and projects.",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <SiAntdesign />, name: "Ant Design" },
        { icon: <IoLogoVercel />, name: "Vercel" },
      ],
    },
    {
      name: "Personal Website v2",
      description:
        "My current personal website to showcase my skill, experiences, and projects.",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <IoLogoVercel />, name: "Vercel" },
      ],
    },
  ];
  return (
    <section id="projects" className="animate-fade-in">
      <h2 className="font-display font-light text-xl md:text-2xl">projects</h2>

      {projects.map(({ name, description, skills }) => {
        return (
          <div className="my-3 md:my-7">
            <div className="flex justify-between flex-wrap flex-col md:flex-row gap-1 md:gap-2">
              <h2 className="text-xl md:text-2xl text-(--color-dark)">
                {name}
              </h2>
              <p className="font-display font-light text-(--color-grey) text-sm md:text-base">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="relative group inline-block mr-3 md:mr-5"
                  >
                    <span className="text-base md:text-xl">{skill.icon}</span>
                    <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-10 px-2 py-1 text-sm text-white bg-(--color-grey) rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </p>
            </div>
            <p className="font-display font-light text-(--color-lightgrey) text-sm md:text-base mt-1">
              {description}
            </p>
          </div>
        );
      })}
    </section>
  );
};
