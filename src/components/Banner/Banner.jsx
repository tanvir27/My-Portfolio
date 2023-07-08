import React from "react";

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row mb-8 mx-8">
      <div className="w-full items-center lg:w-1/2 flex flex-col justify-center" >
        <div className="title">
          <h1 className=" text-3xl  md:mt-0 mt-4 leading-relaxed uppercase font-extrabold dark:text-white">
            Welcome to My Portfolio
          </h1>
          <h1 className=" text-xl leading-relaxed  font-extrabold text-green-600  dark:text-white">
            Details More About Me
          </h1>
        </div>
        <div>
          <p className="my-4 text-gray-600 text-xl dark:text-gray-500">
            {" "}
            Hi, This is Md. Tanvir Hasan
            <br />
            <span style={{ color: "text-gray-500", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "A passionate Frontend Developer from Bangladesh",
                  "A MERN Stack Web Developer",
                  "A Junior Web Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1EwoN3zQadCmTFDrBnWBB-oB_CNCD5YW1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-black bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-green-900"
            >
              Get Resume
            </button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="w-5/6 h-4/6 rounded-full"
          src="https://i.ibb.co/bFbyPV2/IMG-7101-removebg.png"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
