export const Experience = () => {
  const experiences: { position: string; company: string; date: string }[] = [
    {
      position: "Associate Software Engineer",
      company: "Genesys Cloud",
      date: "July 2024 - Present",
    },
    {
      position: "Software Engineer Intern",
      company: "Genesys Cloud",
      date: "May 2023 - Aug 2023",
    },
    {
      position: "Undergraduate Teaching Assistant",
      company: "The Data Mine",
      date: "Aug 2022 - May 2023",
    },
    {
      position: "Technology Coordinator",
      company: "Purdue IT",
      date: "Aug 2021 - May 2023",
    },
    {
      position: "Undergraduate Data Science Researcher",
      company: "The Data Mine – Merck",
      date: "Aug 2021 - May 2023",
    },
  ];
  return (
    <section id="experience">
      <h2 className="font-display font-light text-xl md:text-2xl">
        experience
      </h2>

      {experiences.map(({ position, company, date }) => {
        return (
          <div className="my-3 md:my-7">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <h2 className="text-xl md:text-2xl text-(--color-dark)">
                {position}
              </h2>
              <h2 className="text-xl md:text-2xl text-(--color-grey)">
                @ {company}
              </h2>
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
