"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "/public/github-icon.svg";
import JeffDesign from "/public/jeff-design.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";
import FswBarber from "/public/fsw-barber.png";

export function Projects() {
  return (
    <div>
      <motion.div
        variants={fadeIn("right", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        id="projetos"
        className=" flex h-screen flex-1 flex-col gap-10"
      >
        <h2 className="text-center text-6xl font-bold">PROJETOS</h2>
        {/* projects image */}
        <div className="gap-10 grid lg:flex lg:justify-center">
          <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:flex lg:w-1/3 lg:flex-row">
            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
            <Image
              src={JeffDesign}
              alt=""
              className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
            />
            <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-48">
              Front-end
            </div>
            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-36">
              <span className="text-2xl">Jeff Design</span>
            </div>
            <a href="https://jeffdesign.vercel.app/">
              <Button
                variant="outline"
                className="absolute -bottom-full left-12 z-50 h-16 w-44 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[50px] lg:h-14 lg:w-36 lg:group-hover:bottom-20"
              >
                Ver Projeto
              </Button>
            </a>

            <div className="absolute -bottom-full left-64 z-50 transition-all duration-700 group-hover:bottom-[60px] lg:left-52 lg:group-hover:bottom-[84px]">
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
              Front-end
            </div>
            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-36">
              <span className="text-2xl">FSW Barber</span>
            </div>
            <a href="https://fsw-barber-sand.vercel.app/">
              <Button
                variant="outline"
                className="absolute -bottom-full left-12 z-50 h-16 w-44 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[50px] lg:h-14 lg:w-36 lg:group-hover:bottom-20"
              >
                Ver Projeto
              </Button>
            </a>

            <div className="absolute -bottom-full left-64 z-50 transition-all duration-700 group-hover:bottom-[60px] lg:left-52 lg:group-hover:bottom-[84px]">
              <a href="https://github.com/dexpb/fsw-barber">
                <Image src={Github} width={50} height={0} alt="" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
