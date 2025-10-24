import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 
        index, 0.75)}
        className="w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-40 h-30 object-contain"/>
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "",0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3-xl leading-[30px]"
      >
        A passionate and curious developer who 
        loves transforming ideas into real-world 
        solutions through code. With a strong 
        foundation in C++ and a growing command 
        over Data Structures and Algorithms, I 
        enjoy solving logical problems and writing 
        efficient, clean code.My journey into 
        technology started with an interest in how 
        software works behind the scenes, which led 
        me to explore web development. I ve built 
        several projects using HTML, CSS, and JavaScript, 
        focusing on creating responsive, user-friendly 
        designs and seamless interfaces. I m continuously 
        improving my front-end development skills while 
        also exploring back-end technologies to become a 
        well-rounded developer.
      </motion.p>

      {/* Cards of overview section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
