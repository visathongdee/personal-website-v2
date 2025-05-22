export const Experience = () => {
  const experiences: {
    position: string;
    company: string;
    date: string;
    styling?: string;
    link?: string;
  }[] = [
    {
      position: "Associate Software Engineer",
      company: "Genesys Cloud",
      date: "July 2024 - Present",
      link: "https://www.genesys.com/",
      styling:
        "hover:underline underline-offset-4 decoration-wavy decoration-orange-400 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block",
    },
    {
      position: "Software Engineer Intern",
      company: "Genesys Cloud",
      date: "May 2023 - Aug 2023",
      link: "https://www.genesys.com/",
      styling:
        "hover:underline underline-offset-4 decoration-wavy decoration-orange-400 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block",
    },
    {
      position: "Undergraduate Teaching Assistant",
      company: "The Data Mine",
      date: "Aug 2022 - May 2023",
      link: "https://datamine.purdue.edu/",
      styling:
        "hover:underline underline-offset-4 decoration-dotted decoration-blue-400 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block",
    },
    {
      position: "Technology Coordinator",
      company: "Purdue IT",
      date: "Aug 2021 - May 2023",
      link: "https://it.purdue.edu/index.php",
      styling:
        "hover:underline underline-offset-4 decoration-dashed decoration-yellow-500 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block",
    },
    {
      position: "Undergraduate Data Science Researcher",
      company: "The Data Mine – Merck",
      date: "Aug 2021 - May 2023",
      link: "https://datamine.purdue.edu/merck/",
      styling:
        "hover:underline underline-offset-4 decoration-solid decoration-sky-300 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block",
    },
  ];
  return (
    <section id="experience" className="animate-fade-in">
      <h2 className="font-display font-light text-xl md:text-2xl">
        experience
      </h2>

      {experiences.map(({ position, company, date, styling, link }) => {
        return (
          <div className="my-5 md:my-7">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <h2 className="text-xl md:text-2xl text-(--color-dark)">
                {position}
              </h2>
              <a
                href={link}
                className={`text-xl md:text-2xl text-(--color-grey) ${styling}`}
              >
                @ {company}
              </a>
            </div>
            <p className="font-display font-light text-(--color-lightgrey) text-sm md:text-base mt-1">
              {date}
            </p>
          </div>
        );
      })}
    </section>
  );
};
