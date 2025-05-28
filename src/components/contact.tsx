import { useInView } from "motion/react";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contacts: { social: string; handle: string; link: string }[] = [
    {
      social: "email",
      handle: "visathongdee@gmail.com",
      link: "mailto:visathongdee@gmail.com",
    },
    {
      social: "github",
      handle: "@visathongdee",
      link: "https://github.com/visathongdee",
    },
    {
      social: "linkedin",
      handle: "@visathongdee",
      link: "https://linkedin.com/in/visathongdee",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      {contacts.map(({ social, handle, link }, i) => {
        return (
          <div key={i} className="my-0 md:my-1">
            <div className="flex justify-between items-center flex-wrap flex-row md:flex-row gap-1 md:gap-2">
              <h2 className="font-display font-light text-base md:text-xl text-(--color-dark)">
                {social}
              </h2>
              <hr className="min-[320px]:block hidden flex-grow mx-3 border-t border-(--color-lightgrey)" />
              <a
                href={link}
                className="text-lg md:text-xl underline hover:text-(--color-grey) text-(--color-lightgrey) transition duration-300 ease-in-out hover:-translate-y-0.5"
              >
                {handle}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};
