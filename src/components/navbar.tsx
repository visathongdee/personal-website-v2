export const NavBar = () => (
  <nav className="sticky top-0 content-start bg-white z-10 flex justify-center gap-5 py-4 font-display text-lg md:text-xl ">
    <a href="#aboutMe" className="hover:underline text-[var(--color-dark)]">
      about me
    </a>
    <a href="#experience" className="hover:underline text-[var(--color-dark)]">
      experience
    </a>
    <a href="#projects" className="hover:underline text-[var(--color-dark)]">
      projects
    </a>
    <a href="#contact" className="hover:underline text-[var(--color-dark)]">
      contacts
    </a>
  </nav>
);
