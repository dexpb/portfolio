"use client";
import Image from "next/image";
import Photo from "/public/pablo-image.jpg";
import { Button } from "@/components/ui/button";
import Linkedin from "/public/linkedin-icon.svg";
import Github from "/public/github-icon.svg";
import Email from "/public/email-icon.svg";
import { ChevronDown } from "lucide-react";
import DarkEmail from "/public/darkmode-email.svg";
import DarkGithub from "/public/darkmode-github.svg";
import DarkLinkedin from "/public/darkmode-linkedin.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";
import { TypeAnimation } from "react-type-animation";
/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
  return (
    <div className="mb-10 flex h-2/6 lg:mb-0 lg:ml-0 lg:flex-col lg:items-center lg:justify-center">
      <div className="flex flex-col items-center justify-center gap-20 lg:w-screen lg:flex-row lg:justify-between">
        {/* text */}
        <div className="order-2 flex-col items-center justify-center text-center lg:order-none lg:items-start lg:justify-start lg:text-left">
          <TypeAnimation
            sequence={['console.log("Olá Mundo 👋!")', 400]}
            className="text-[29px] font-semibold text-dark-mode dark:text-white lg:text-6xl"
          />

          <motion.div
            variants={fadeIn("right", 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p className="mt-10 text-balance font-josefin text-4xl font-semibold text-dark-mode dark:text-white lg:text-5xl">
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
              <a href="/pablo-cv.pdf" download>
                <Button
                  variant="outline"
                  className="h-16 w-56 rounded-3xl border-4 border-emph-dark bg-emph-dark font-bold text-white shadow-2xl shadow-emph-dark dark:bg-transparent dark:hover:bg-emph-dark"
                >
                  {" "}
                  Download CV
                </Button>
              </a>

              <Image
                src={Email}
                width={50}
                alt=""
                className="hidden transition duration-500 ease-in-out hover:scale-125 dark:block"
              />
              <Image
                src={Github}
                width={50}
                alt=""
                className="hidden transition duration-500 ease-in-out hover:scale-125 dark:block"
              />
              <Image
                src={Linkedin}
                width={50}
                alt=""
                className="hidden transition duration-500 ease-in-out hover:scale-125 dark:block"
              />
              <Image
                src={DarkEmail}
                width={50}
                alt=""
                className="transition duration-500 ease-in-out hover:scale-125 dark:hidden"
              />
              <Image
                src={DarkGithub}
                width={50}
                alt=""
                className="transition duration-500 ease-in-out hover:scale-125 dark:hidden"
              />
              <Image
                src={DarkLinkedin}
                width={50}
                alt=""
                className="transition duration-500 ease-in-out hover:scale-125 dark:hidden"
              />
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
            width={600}
            height={0}
            alt=""
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
