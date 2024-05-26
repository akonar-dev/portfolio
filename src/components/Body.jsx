import AboutMe from "./AboutMe";
import Academics from "./Academics";
import WorkEx from "./WorkEx";
import ContactMe from "./ContactMe";
import Blogs from "./Blogs";

const Body = () => {
  return (
    <div className="bg-body-color h-96 inline-flex">
      <img className="h-28 p-5" src="../src/assets/DSCN4725 (1).jpg" alt="abc" />
      <div>
      <p className="p-5">Arijeet Konar</p>
      <p className="p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aliquid a cumque, ratione blanditiis fuga molestias recusandae nisi reiciendis asperiores sunt quis consequuntur delectus deleniti corrupti labore velit porro id.</p>
      <AboutMe/>
      <WorkEx/>
      <Academics/>
      <ContactMe/>
      <Blogs/>
      </div>
    </div>
  );
};
export default Body