import React from "react";
import { BsBook, BsPersonSlash } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="w-11/12 mx-auto" id="about">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="mr-3">
            <FaGraduationCap className="text-4xl" />
          </div>
          <h2 className="text-5xl text-center text-green-900 font-bold mb-5">
            Education & Work Experience
          </h2>
        </div>
        <h2 className="text-lg my-6">
          <span className="pl-20">Expertise</span> in front-end technologies,
          including Html5, CSS3, JavaScript ,Typescript and libraries such as
          React Js, Bootstrap5, Tailwind, DaisyUI . Knowledge of server-side
          programming languages including MongoDB, Node Js, Express Js.I'm
          mostly interested in developing responsive full-stack web
          applications. Please see my resume for further information.
        </h2>
        <div className="grid md:grid-cols-2 gap-8  md:px-20">
          <motion.div
            className="flex bg-green-100 rounded-lg shadow p-8  hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex-shrink-0">
              <BsPersonSlash className="text-4xl text-blue-500" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold mb-2">
                Personal Information
              </h3>
              <p className="text-gray-600">
                {" "}
                <span className="font-semibold">Name: </span>Md. Tanvir Hasan
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Age: </span> 23
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +8801614869097
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                tanvirhasan2463@gmail.com
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex bg-green-100 rounded-lg shadow p-8  hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex-shrink-0">
              <BsBook className="text-4xl text-blue-500" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold mb-2">
                Educational Qualification
              </h3>
              <p className="text-gray-600">Daffodil International University</p>
              <p className="text-gray-600">
                BSc in Computer Science & Engineering
              </p>
              <p className="text-gray-600">2019-2022</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
