import { useRef, type ReactElement } from "react";
import { FaGithub, FaReact, FaSpotify, FaYelp } from "react-icons/fa";
import {
  SiMui,
  SiGooglemaps,
  SiAntdesign,
  SiTypescript,
  SiVite,
  SiExpress,
  SiFlask,
  SiSqlite,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { ChartJsIcon } from "../assets/icons/ChartJsIcon";
import { useInView } from "motion/react";

import wanderImage from "/pictures/wander.webp";
import statifyImage from "/pictures/statify.webp";
import portfolioV1Image from "/pictures/portfolioV1.webp";
import portfolioV2Image from "/pictures/portfolioV2.webp";
import rendezviewImage from "/pictures/rendezview.webp";

export const Projects = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

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
      picture: wanderImage,
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiMui />, name: "Materials UI" },
        { icon: <IoLogoFirebase />, name: "Firebase" },
        { icon: <FaSpotify />, name: "Spotify API" },
        { icon: <SiGooglemaps />, name: "Google Maps API" },
      ],
    },
    {
      name: "RendezView",
      nameStyling:
        "hover:underline underline-offset-4 decoration-dotted decoration-sky-400 transition duration-300 hover:-translate-y-0.5",
      description:
        "A web app that helps users discover local events by gathering listings from various sources and recommending them based on their interests, location, and past activity.",
      githubLink: "https://github.com/goodvid/rendezview/",
      picture: rendezviewImage,
      skills: [
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <SiMui />, name: "Material UI" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiSqlite />, name: "SQLite" },
        { icon: <FaYelp />, name: "Yelp API" },
        { icon: <SiGooglemaps />, name: "Google Maps API" },
      ],
    },
    {
      name: "Statify",
      nameStyling:
        "hover:underline underline-offset-4 decoration-wavy decoration-green-500 transition duration-300 hover:-translate-y-0.5",
      description:
        "A web app that breaks down your Spotify listening trends by top artists, tracks, and genres, with filters for all-time, last 6 months, and last 4 weeks.",
      githubLink: "https://github.com/visathongdee/statify",
      picture: statifyImage,
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
      link: "https://v1.visathongdee.com",
      githubLink: "https://github.com/visathongdee/personal-website",
      picture: portfolioV1Image,
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
      picture: portfolioV2Image,
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
    <section
      id="projects"
      ref={titleRef}
      className={`transition-all duration-1000 ease-in-out transform ${
        isTitleInView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
    >
      <h2 className="font-display font-light text-xl md:text-2xl">projects</h2>

      <div className="flex flex-col gap-5 md:gap-10">
        {projects.map(
          (
            {
              name,
              nameStyling,
              description,
              skills,
              link,
              githubLink,
              picture,
            },
            index
          ) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
              <div
                key={index}
                ref={ref}
                className={`flex flex-row justify-start gap-2 w-full transition-all duration-1000 ease-in-out transform ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
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
                            <span className="text-base md:text-xl inline-block hover:-translate-y-0.5 duration-300 ">
                              {skill.icon}
                            </span>
                            <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bottom-7 md:bottom-10 px-2 py-1 text-sm text-white bg-(--color-grey) rounded hidden group-hover:block transition-all">
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
                      className={
                        "transition-all duration-500 ease-in-out overflow-hidden flex justify-center"
                      }
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
      </div>
    </section>
  );
};
