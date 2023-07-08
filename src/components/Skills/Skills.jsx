import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiKnowledgebase,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { IoLogoGithub, IoLogoNodejs } from "react-icons/io5";
import { BiBrain, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

const skills = [
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <IoLogoNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <IoLogoGithub />, name: "Git/GitHub" },

  { icon: <BiBrain />, name: "Deep Learning" },
];

const Skills = () => {
  return (
    <section className=" py-12 " id="skills">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="mr-3 ">
            <SiKnowledgebase className="text-4xl" />
          </div>
          <h2 className="text-5xl text-center text-green-900 font-bold ">
            My Skills
          </h2>
        </div>
        <h2 className="text-2xl pl-12 text-green-700 font-semibold mb-6">
          These are some Technologies I'he worked with....
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-green-800 mb-4">{skill.icon}</div>
              <p className="text-lg text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
