export const Projects = () => {
  const projects: { name: string; description: string; skills: string[] }[] = [
    {
      name: "Wander",
      description:
        "A web app that generates a personalized music playlist for a user's road or plane trip from travel destination and music preferences determined through a preference quiz and the user's Spotify data.",
      skills: ["ReactJS", "TailwindCSS"],
    },
    {
      name: "Personal Website v1",
      description:
        "My personal website to showcase my skill, experiences, and projects.",
      skills: ["ReactJS", "Ant Design", "Typescript", "Vercel", "Figma"],
    },
    {
      name: "Personal Website v2",
      description:
        "My personal website to showcase my skill, experiences, and projects.",
      skills: [
        "ReactJS",
        "TailwindCSS",
        "Vite",
        "Typescript",
        "Vercel",
        "Figma",
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
                  <span key={i} className="inline-block mr-5">
                    {skill}
                  </span>
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
