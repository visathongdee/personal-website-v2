export const AboutMe = () => {
  return (
    <section id="aboutMe" className="animate-fade-in">
      <h1 className="text-2xl/8 md:text-4xl/12">
        <span className="text-(--color-lightgrey) hover:animate-bounce cursor-minion md:underline decoration-dotted hover:decoration-yellow-500 hover:text-(--color-grey) transition-all duration-300 ease-in-out inline-block">
          Bello
        </span>
        <span className="text-(--color-lightgrey)"> 👋, I’m </span>
        <span className="text-(--color-dark)">Visa Thongdee 💳 </span>
        <span className="text-(--color-lightgrey)">and welcome to my </span>
        <span className="text-(--color-dark)">website</span>
        <span className="text-(--color-lightgrey)">
          ! I recently graduated with a{" "}
        </span>
        <span className="text-(--color-dark)">B.S. in Computer Science </span>
        <span className="text-(--color-lightgrey)">
          with a concentration in Software Engineering and Machine Learning from{" "}
        </span>
        <a
          href="https://www.purdue.edu/"
          className="text-(--color-dark) hover:underline underline-offset-4 decoration-dashed decoration-yellow-500 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block"
        >
          Purdue University
        </a>
        <span className="text-(--color-dark)"> 🎓 </span>
        <span className="text-(--color-lightgrey)">
          and I currently work as a{" "}
        </span>
        <span className="text-(--color-dark)">software engineer </span>
        <span className="text-(--color-lightgrey)">at </span>
        <a
          href="https://www.genesys.com/"
          className="text-(--color-dark) hover:underline underline-offset-4 decoration-wavy decoration-orange-400 transition duration-300 ease-in-out hover:-translate-y-0.5 inline-block"
        >
          Genesys Cloud
        </a>
        <span className="text-(--color-dark)"> ☁️ </span>
      </h1>
    </section>
  );
};
