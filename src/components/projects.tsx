import type { ReactElement } from "react";
import { FaGithub, FaReact, FaSpotify } from "react-icons/fa";
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
import { MdArrowOutward } from "react-icons/md";
// import { IoIosArrowForward } from "react-icons/io";

export const Projects = () => {
  const projects: {
    name: string;
    description: string;
    skills: { icon: ReactElement; name: string }[];
    githubLink?: string;
    link?: string;
    nameStyling?: string;
  }[] = [
    {
      name: "Wander",
      nameStyling:
        "hover:underline underline-offset-4 decoration-dashed decoration-violet-500 transition duration-300 hover:-translate-y-0.5",
      description:
        "A web app that generates a personalized music playlist for a user's road or plane trip from travel destination and music preferences determined through a preference quiz and the user's Spotify data.",
      githubLink: "https://github.com/akshayakumar12/wander/",
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
      nameStyling:
        "hover:underline underline-offset-4 decoration-wavy decoration-green-500 transition duration-300 hover:-translate-y-0.5",
      description:
        "Summarize your spotify listening activity by top artists, tracks, and genres",
      githubLink: "https://github.com/visathongdee/statify",
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
      nameStyling:
        "hover:underline underline-offset-4 decoration-rose-400 transition duration-300 hover:-translate-y-0.5",
      description:
        "My (old) personal website to showcase my skill, experiences, and projects.",
      link: "https://visathongdee.com",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <SiAntdesign />, name: "Ant Design" },
        { icon: <IoLogoVercel />, name: "Vercel" },
      ],
    },
    {
      name: "Personal Website v2",
      nameStyling:
        "hover:underline underline-offset-4 decoration-double decoration-orange-400 transition duration-300 hover:-translate-y-0.5",
      description:
        "My current personal website to showcase my skill, experiences, and projects.",
      link: "https://visathongdee.com",
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

      {projects.map(
        ({ name, description, skills, link, githubLink, nameStyling }) => {
          return (
            <div className="my-5 md:my-7 flex flex-col">
              <div className="flex justify-between flex-wrap flex-col md:flex-row gap-1 md:gap-2">
                {/* <IoIosArrowForward className="text-xl" /> */}
                <a
                  href={link || githubLink}
                  className={`text-xl md:text-2xl text-(--color-dark) flex flex-row gap-2 ${
                    link || githubLink ? nameStyling : <></>
                  }`}
                >
                  {name}
                  {link ? <MdArrowOutward /> : <></>}{" "}
                  {githubLink ? <FaGithub /> : <></>}
                </a>

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
        }
      )}
    </section>
  );
};
