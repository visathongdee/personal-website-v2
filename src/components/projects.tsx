import { useState, type ReactElement } from "react";
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
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { ChartJsIcon } from "../assets/icons/ChartJsIcon";

export const Projects = () => {
  const projects: {
    name: string;
    nameStyling?: string;
    description: string;
    githubLink?: string;
    link?: string;
    picture?: string;
    skills: { icon: ReactElement; name: string }[];
  }[] = [
    {
      name: "Wander",
      nameStyling:
        "hover:underline underline-offset-4 decoration-dashed decoration-violet-500 transition duration-300 hover:-translate-y-0.5",
      description:
        "A web app that generates a personalized music playlist for a user's road or plane trip from travel destination and music preferences determined through a preference quiz and the user's Spotify data.",
      githubLink: "https://github.com/akshayakumar12/wander/",
      picture: "src/assets/pictures/wanderBorder.png",
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
      picture: "src/assets/pictures/statifyBorderSixMonths.png",
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
      githubLink: "https://github.com/visathongdee/personal-website",
      picture: "src/assets/pictures/portfolioV1Border.png",
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
      githubLink: "https://github.com/visathongdee/personal-website-v2",
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <IoLogoVercel />, name: "Vercel" },
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="animate-fade-in">
      <h2 className="font-display font-light text-xl md:text-2xl">projects</h2>

      {projects.map(
        (
          { name, nameStyling, description, skills, link, githubLink, picture },
          index
        ) => {
          const isExpanded = expandedIndex === index;
          return (
            <div className="flex flex-row justify-start gap-2 width-full">
              <IoIosArrowForward
                className={`w-6 h-6 my-5 md:my-7 flex-shrink-0 text-(--color-grey) transition-transform ease-in-out duration-300 hover:-translate-y-0.5 ${
                  isExpanded ? "rotate-90" : ""
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              />
              <div className="flex flex-col w-full">
                {/* top line (name + skills) */}
                <div className="my-5 md:my-7 w-full flex flex-col justify-between">
                  <div className="flex justify-between flex-wrap flex-col md:flex-row gap-1 md:gap-2">
                    {/* name + link */}
                    <div className="flex flex-row gap-1 md: gap-2">
                      <a
                        href={link}
                        className={`text-xl md:text-2xl text-(--color-dark) flex flex-row gap-2 ${
                          link || githubLink ? nameStyling : <></>
                        }`}
                      >
                        {name}
                        {link ? <MdArrowOutward /> : <></>}{" "}
                      </a>
                      <a
                        href={githubLink}
                        className={`text-xl md:text-2xl text-(--color-dark) flex flex-row gap-2 ${
                          link || githubLink ? nameStyling : <></>
                        }`}
                      >
                        {githubLink ? <FaGithub /> : <></>}
                      </a>
                    </div>

                    {/* skills icons */}
                    <div className="font-display font-light text-(--color-grey) text-sm md:text-base">
                      {skills.map((skill, i) => (
                        <div
                          key={i}
                          className="relative group inline-block mr-3 md:mr-5"
                        >
                          <span className="text-base md:text-xl">
                            {skill.icon}
                          </span>
                          <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-10 px-2 py-1 text-sm text-white bg-(--color-grey) rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* description */}
                  <p className="font-display font-light text-(--color-lightgrey) text-sm md:text-base mt-1">
                    {description}
                  </p>
                </div>

                {/* picture */}
                {picture && (
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden flex justify-center ${
                      isExpanded
                        ? "max-h-full opacity-100 translate-y-0 mt-3"
                        : "max-h-0 opacity-0 -translate-y-3"
                    }`}
                  >
                    <img
                      src={picture}
                      alt={`${name} screenshot`}
                      className="object-cover w-full h-auto transition-opacity duration-500 ease-in-out"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};
