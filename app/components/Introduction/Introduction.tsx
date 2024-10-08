"use client";
import Image from "next/image";
import Photo from "/public/pablo-image.jpg";
import Linkedin from "/public/linkedin-icon.svg";
import Github from "/public/github-icon.svg";
import { ChevronDown } from "lucide-react";
import DarkGithub from "/public/darkmode-github.svg";
import DarkLinkedin from "/public/darkmode-linkedin.svg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { fadeIn } from '../Variant/Variants';
export default function Introduction() {
  return (
    <div className="mb-10 flex h-2/6 lg:mb-0 lg:ml-0 lg:flex-col lg:items-center lg:justify-center">
      <div className="flex w-screen flex-col items-center justify-center gap-20 lg:flex-row lg:justify-between lg:gap-0 lg:p-8">
        {/* text */}
        <div className="order-2 flex-col items-center justify-center text-center lg:order-none lg:items-start lg:justify-start lg:text-left">
          <TypeAnimation
            sequence={['console.log("Olá Mundo 👋!")', 400]}
            className="text-[22px] font-semibold text-dark-mode dark:text-white lg:text-6xl"
          />

          <motion.div
            variants={fadeIn("right", 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p className="mt-10 text-balance font-josefin text-2xl font-semibold text-dark-mode dark:text-white lg:text-5xl">
              Eu sou Pablo e sejam bem-vindos ao meu portfólio! Sintam-se à
              vontade para saber mais sobre mim.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="m-10 flex flex-row justify-center gap-6 lg:mx-0 lg:justify-start lg:gap-10">
              <Link
                href="https://github.com/dexpb"
                className="hidden transition duration-500 ease-in-out hover:scale-125 dark:block"
              >
                <Image src={Github} width={50} alt="Github Logo" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/pablocorreaalmeida/"
                className="hidden transition duration-500 ease-in-out hover:scale-125 dark:block"
              >
                <Image src={Linkedin} width={50} alt="Linkedin Logo" />
              </Link>
              <Link
                href="https://github.com/dexpb"
                className="block transition duration-500 ease-in-out hover:scale-125 dark:hidden"
              >
                <Image src={DarkGithub} width={50} alt="Github Logo" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pablocorreaalmeida/"
                className="block transition duration-500 ease-in-out hover:scale-125 dark:hidden"
              >
                <Image src={DarkLinkedin} width={50} alt="Linkedin Logo" />
              </Link>
            </div>
          </motion.div>
        </div>
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="order-1 w-1/3 lg:order-none lg:mb-0 lg:block lg:w-screen"
        >
          <Image
            src={Photo}
            width={500}
            height={0}
            alt="Minha foto"
            className="rotate-6 rounded-xl shadow-2xl shadow-emph-dark"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <ChevronDown className="mt-14 hidden h-10 animate-bounce text-emph-dark dark:text-white lg:flex lg:w-10" />
      </motion.div>
    </div>
  );
}
