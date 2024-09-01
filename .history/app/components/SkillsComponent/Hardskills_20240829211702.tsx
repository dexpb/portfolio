"use client"

import Image from "next/image";
import HtmlLogo from "/public/HTML5.svg";
import CssLogo from "/public/CSS3.svg";
import JavascriptLogo from "/public/Javascript.svg";
import TypescriptLogo from "/public/Typescript.svg";
import ReactLogo from "/public/React.svg";
import NextjsLogo from "/public/Nextjs.svg";
import TailwindLogo from "/public/TailwindCSS.svg";
import JestLogo from "/public/Jest.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";

const skillsLogo = [
  { src: HtmlLogo, name: "HTML5" },
  { src: CssLogo, name: "CSS3" },
  { src: JavascriptLogo, name: "JavaScript" },
  { src: TypescriptLogo, name: "TypeScript" },
  { src: ReactLogo, name: "React" },
  { src: NextjsLogo, name: "Next.js" },
  { src: TailwindLogo, name: "Tailwind CSS" },
  { src: JestLogo, name: "Jest" },
];

const slideIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};
export default function Hardskills() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 font-josefin text-5xl font-bold text-emph-dark dark:text-white lg:w-screen lg:text-6xl">
      <motion.h2
        variants={fadeIn("right", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}>
        TECNOLOGIAS
      </motion.h2>
      <div className="grid grid-flow-col grid-rows-4 lg:grid-rows-3 gap-20 rounded-xl">
        {skillsLogo.map((skills, index) => (
          <motion.li
            key={index}
            className="grid h-16 w-16 lg:h-28 lg:w-28 place-items-center rounded-xl bg-emph-dark"
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              key={index}
              src={skills.src}
              alt="Skills Logo"
              className="w-10 lg:w-12 bg-emph-dark"
            />
          </motion.li>
        ))}
      </div>
    </div>
  );
}
