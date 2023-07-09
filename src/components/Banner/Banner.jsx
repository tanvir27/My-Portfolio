import React from "react";
import { FaCrown, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="w-11/12 mx-auto " id="home">
      <div className="text-center pt-4">
        <h1 className="text-black inline-block text-center bg-green-400 font-serif  focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-5 py-2 mr-2 mb-2 dark:focus:ring-green-900">
          <FaCrown className="inline-block mr-2 mb-1 text-4xl text-green-900" />{" "}
          MERN DEVELOPER
        </h1>
      </div>

      <div className="flex items-center flex-col-reverse lg:flex-row mb-8 mx-8">
        <div
          className="w-full items-center lg:w-1/2 flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="title">
            <h1 className=" text-4xl text-center md:mt-0 mt-4 leading-relaxed uppercase font-extrabold dark:text-white">
              Welcome to My Portfolio
            </h1>
            <h1 className=" text-2xl md:text-3xl text-center md:text-start md:pl-8 leading-relaxed  font-extrabold text-green-600  dark:text-white">
              Details More About Me.....
            </h1>
          </div>
          <div>
            <p className="my-4 text-gray-600 text-2xl dark:text-gray-500">
              {" "}
              Hi, This is Md. Tanvir Hasan
              <br />
              <span style={{ color: "text-gray-500", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "A passionate Frontend Developer from Bangladesh",
                    "A React Developer",
                    "A MERN Stack Developer",
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
                className="text-black bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-green-900"
              >
                Get Resume
              </button>
            </a>
          </div>
          <section className="flex justify-center py-10">
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/in/tanvir-hasan27/"
                className="text-green-500 text-4xl font-medium rounded-full transition-all transform hover:scale-125"
              >
                <BiLogoLinkedin className="w-16 h-16 rounded-full" />
              </a>
              <a
                href="https://github.com/tanvir27"
                className="text-green-500 text-4xl font-medium rounded-full transition-all transform hover:scale-125"
              >
                <FaGithub className="w-16 h-16 rounded-full " />
              </a>

              <a
                href="https://www.instagram.com/tanwirhasan0/"
                className="text-green-500 text-4xl font-medium rounded-full transition-all transform hover:scale-125"
              >
                <FaInstagram className="w-16 h-16 rounded-full" />
              </a>
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/2 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img
            className="w-3/4 h-4/6 rounded-full"
            src="https://i.ibb.co/bFbyPV2/IMG-7101-removebg.png"
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
