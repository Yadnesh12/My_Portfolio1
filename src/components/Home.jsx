import React from "react";
import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiDownloadCloud } from 'react-icons/fi';
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2.5 years of experience in building and designing applications at Infosys
            Limited, Specializing in React.JS, JavaScript and Oracle Jet.
            Proficient in Agile Methodologies, leading a successful Project and
            delivering optimizes Solution.
          </p>

          <div>
          {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link> */}

           <a href="/resume.pdf" download={true} className= "group" >
      <button className="bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 my-2 rounded inline-flex items-center lg:animate-pulse">
        <span>Resume </span>
        <FiDownloadCloud size={25} className=" ml-2" />
      </button>
    </a>
  


          </div>
        </div>
        <div>
            <img src={HeroImage} alt="my Profile" className="rounded-full mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
