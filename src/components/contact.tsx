export const Contact = () => {
  const contacts: { social: string; handle: string }[] = [
    {
      social: "email",
      handle: "visathongdee@gmail.com",
    },
    {
      social: "github",
      handle: "@visathongdee",
    },
    {
      social: "linkedin",
      handle: "@visathongdee",
    },
  ];
  return (
    <section id="contact">
      {contacts.map(({ social, handle }) => {
        return (
          <div className="my-0 md:my-1">
            <div className="flex justify-between items-center flex-wrap flex-row md:flex-row gap-1 md:gap-2">
              <h2 className="font-display font-light text-base md:text-xl text-(--color-dark)">
                {social}
              </h2>
              <hr className="min-[320px]:block hidden flex-grow mx-3 border-t border-[var(--color-lightgrey)]" />
              <h2 className="text-lg md:text-xl text-(--color-grey) underline">
                {handle}
              </h2>
            </div>
          </div>
        );
      })}
    </section>
  );
};
