export const NavBar = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto md:px-0 pt-15 hidden min-[350px]:block">
      <nav className="bg-white z-10 flex gap-3 md:gap-10 font-display text-base md:text-2xl mx-auto ">
        <a
          href="#aboutMe"
          className="hover:text-[var(--color-dark)] text-[var(--color-lightgrey)] transition-colors duration-300 ease-in-out"
        >
          about me
        </a>
        <a
          href="#experience"
          className="hover:text-[var(--color-dark)] text-[var(--color-lightgrey)] transition-colors duration-300"
        >
          experience
        </a>
        <a
          href="#projects"
          className="hover:text-[var(--color-dark)] text-[var(--color-lightgrey)] transition-colors duration-300"
        >
          projects
        </a>
        <a
          href="#contact"
          className="hover:text-[var(--color-dark)] text-[var(--color-lightgrey)] transition-colors duration-300"
        >
          contacts
        </a>
      </nav>
    </div>
  );
};
