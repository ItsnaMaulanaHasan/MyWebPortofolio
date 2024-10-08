/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p>
          I am a 7th-semester Informatics Engineering student with a keen interest in both Fullstack Web Development and Frontend Web Development. My experience includes working with HTML, CSS, JavaScript, and PHP, as well as using
          frameworks like Laravel and ReactJS to build dynamic and responsive web applications.
        </p>
        <br />
        <p>
          In addition to fullstack development, I am also passionate about mobile frontend development, with hands-on experience in using Flutter and Swift to create cross-platform applications that offer a seamless user experience. I enjoy
          building intuitive user interfaces with a focus on functionality and design.
        </p>
        <br />
        <p>I am highly motivated to continue learning and growing in the field of web and mobile development. I am excited to apply my skills and knowledge to new challenges and contribute to innovative projects in the tech industry.</p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
