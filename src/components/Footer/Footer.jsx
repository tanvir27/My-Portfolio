import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-100 mt-5 text-black">
      <div className="w-11/12 mx-auto py-8 px-2 text-center">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 ">
            <Link to="/" className="flex items-center md:pl-10">
              <img
                src="https://i.ibb.co/hZW8M5X/TANVIR-HASAN-02.png"
                alt="Logo"
                className="h-16 w-16"
              />
            </Link>
            <p className="text-black text-justify">
              Expertise in front-end technologies, including Html5, CSS3,
              JavaScript,Typescript and libraries such as React Js, Bootstrap5,
              Tailwind, DaisyUI. Also Knowledge of server-side programming
              language .
            </p>
          </div>
          <div className="w-full lg:w-1/4 lg:mb-0">
            <h3 className="font-bold mb-4 text-2xl">Products</h3>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="text-black ">
                  Designing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-black">
                  Developing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-black ">
                  User Authentication
                </Link>
              </li>
              <li className="mb-2 ">
                <Link href="#" className="text-black">
                  Authorization System
                </Link>
              </li>
              <li className="mb-4 md:mb-0">
                <Link href="#" className="text-black">
                  Responsive Web Applications
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4  lg:mb-0">
            <div className="text-center">
              <h3 className=" font-bold mb-4 text-2xl">Social</h3>
              <ul className="list-none inline-block space-y-3 text-xl ">
                <li className="">
                  <Link to="https://www.facebook.com/tanwirhasan0">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="">
                  <Link to="https://www.linkedin.com/in/tanvir-hasan27/">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="">
                  <Link to="https://www.instagram.com/tanwirhasan0/">
                    <FaInstagram />
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://github.com/tanvir27"
                    className="text-black "
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li className="">
                  <Link to="/" className="text-black ">
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
