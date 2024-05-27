

const Header = () => {
  return (
    <div className="h-20 flex flex-wrap justify-between bg-header  text-white p-7">
      <h1 className="text-2xl font-bold hover:text-3xl">Personal Portfolio</h1>
        <ul className="h-7 flex flex-1 flex-wrap justify-end space-x-7 bg-header text-lg font-sans">
            <a className="hover:text-xl" href="#about-me">About</a>
            <a className="hover:text-xl" href="#work-ex">Work Experience</a>
            <a className="hover:text-xl" href="#academics">Academics</a>
            <a className="hover:text-xl" href="#blogs">Skills</a>
            <a className="hover:text-xl" href="#projects">Projects</a>
            <a className="hover:text-xl" href="#contact">Lets Connect</a>
        </ul>
    </div>
  )
}

export default Header