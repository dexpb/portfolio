"use client";
import Image from "next/image";
import JeffDesign from "/public/jeff-design.png";
import { Button } from "@/components/ui/button";
import Skills from "../SkillsComponent/skills";
import Github from "/public/github-icon.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";
import FswBarber from "/public/fsw-barber.png"

export default function Projects() {
  return (
    <div className="flex flex-col space-y-40 items-center justify-center gap-10 font-josefin text-5xl font-bold text-emph-dark dark:text-white lg:w-screen lg:text-6xl">
      <ul>
        <Skills />
      </ul>

      <motion.div
        variants={fadeIn("right", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        id="projetos"
        className="m-20  flex h-screen flex-1 flex-col gap-10"
      >
        <h2 className="text-center">PROJETOS</h2>
        {/* projects image */}
        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70  lg:flex lg:flex-row"></div>
          <Image
            src={JeffDesign}
            alt=""
            className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-48">
            UI/UX Design
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-36">
            <span className="text-2xl">Jeff Design</span>
          </div>
          <a href="https://jeffdesign.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 group-hover:bottom-[50px] z-50 h-16 w-44 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 lg:group-hover:bottom-20 lg:h-14 lg:w-36"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-64 group-hover:bottom-[60px] lg:left-52 z-50 transition-all duration-700 lg:group-hover:bottom-20">
            <a href="https://github.com/dexpb/jeffdesign">
              <Image src={Github} width={50} height={0} alt="" />
            </a>
          </div>
        </div>

          <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={FswBarber}
            alt=""
            className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-48">
            UI/UX Design
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-36">
            <span className="text-2xl">FSW Barber</span>
          </div>
          <a href="https://jeffdesign.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 group-hover:bottom-[50px] z-50 h-16 w-44 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 lg:group-hover:bottom-20 lg:h-14 lg:w-36"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-64 group-hover:bottom-[60px] lg:left-52 z-50 transition-all duration-700 lg:group-hover:bottom-20">
            <a href="https://github.com/dexpb/jeffdesign">
              <Image src={Github} width={50} height={0} alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
