import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags,
  image, source_code_link }) => {
    return (
      <motion.div variants={fadeIn("up", "spring",
      index * 0.5, 0.75 )}>
        <Tilt 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl
          sm:w-[300px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover
              rounded-2xl"
            />
            {/* to show github icon on top */}
            <div className="absolute inset-0 flex
            justify-end m-3 card-img_hover">
              <div
                onClick={ () => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-10 h-10
                rounded-full flex justify-center
                items-center cursor-pointer"
              >
                <img 
                  src={github}
                  alt={github}
                  className="w-1/2 h-1/2
                  object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold 
            text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary 
            text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px]
              ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
  }

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >My Work</p>
          <h2 className={styles.sectionHeadText}
          >Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("", "",0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          max-w-3-xl leading-[30px]"
        >
        This section showcases a collection of my projects 
        that highlight my growth as a developer — from 
        learning the fundamentals of programming in C++ 
        to building modern, interactive web applications 
        using HTML, CSS, JavaScript, and React. Each project
         marks a step forward in applying my technical 
         knowledge, experimenting with frameworks, and 
         exploring new problem-solving approaches. Some 
         projects focus on strengthening my understanding 
         of Data Structures and Algorithms, while others 
         reflect my passion for crafting clean, responsive, 
         and performance-driven web interfaces. I see every 
         project as a learning opportunity — a chance to 
         transform ideas into code and concepts into 
         experience. Through these creations, I’ve deepened 
         my understanding of how logic, design, and technology 
         work together to create impactful and efficient 
         digital solutions.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
