import AboutMe from "./AboutMe";
import Academics from "./Academics";
import WorkEx from "./WorkEx";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Projects from "./Projects";

const Body = () => {
  return (
    <div className="h-auto px-10 bg-cream w-full">
      <img className="h-52 border-solid border-2 rounded-lg p-2 my-5" src="../src/assets/DSCN4725 (1).jpg" alt="abc" />
      <div>
      <AboutMe/>
      <WorkEx/>
      <Academics/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      </div>
    </div>
  );
};
export default Body