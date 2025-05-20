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
    <div className="mx-auto mt-30 w-1/2">
      <h2 className="font-display font-light text-2xl my-5">experience</h2>

      {experiences.map(({ position, company, date }) => {
        return (
          <div className="my-7">
            <h2 className="text-base">
              <span className="text-(--color-dark)">{position} </span>
              <span className="text-(--color-lightgrey)">@ {company}</span>
            </h2>
            <p className="font-display font-light text-(--color-lightgrey)">
              {date}
            </p>
          </div>
        );
      })}
    </div>
  );
};
