import "./index.css";
import { AboutMe } from "./components/aboutMe";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col px-8">
      <NavBar />
      <div className="w-full md:w-1/2 mx-auto flex flex-col flex-grow py-15 md:py-30 gap-15 md:gap-30">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
