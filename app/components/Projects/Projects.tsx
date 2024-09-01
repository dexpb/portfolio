"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "/public/github-icon.svg";
import JeffDesign from "/public/jeff-design.png";
import { motion } from "framer-motion";
import FswBarber from "/public/fsw-barber.png";
import { fadeIn } from '../Variant/Variants';

export function Projects() {
  return (
    <motion.div
      variants={fadeIn("right", 0.01)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      id="projetos"
      className="m-10 flex h-3/5 flex-1 flex-col gap-20 lg:m-20"
    >
      <h2 className="text-center text-4xl font-bold uppercase text-emph-dark dark:text-white lg:text-7xl">
        Projetos
      </h2>
      {/* projects image */}
      <div className="grid gap-10 lg:flex lg:justify-center">
        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:flex lg:w-1/3 lg:flex-row">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={JeffDesign}
            alt="JeffDesign Image"
            className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-52">
            <h2 className="text-3xl font-bold">Front-end</h2>
            <p className="hidden lg:block">Landing page desenvolvida com <span>React, CSS e Framer Motion</span></p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">Jeff Design</h2>
          </div>
          <a href="https://jeffdesign.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:h-14 lg:w-36 lg:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-52 lg:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/jeffdesign">
              <Image src={Github} width={50} height={0} alt="Github Logo" />
            </a>
          </div>
          
        </div>

        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={FswBarber}
            alt="FSW Barber Imagem"
            className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 lg:group-hover:bottom-48 group-hover:bottom-32">
            <h2 className="text-3xl font-bold">Front-end</h2>
            <p className="hidden lg:block">Projeto da Full Stack Week, utilizando NextJS, TypeScript, Shadcn e Prisma. </p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">FSW Barber</h2>
          </div>
          <a href="https://fsw-barber-sand.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:h-14 lg:w-36 lg:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-52 lg:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/fsw-barber">
              <Image src={Github} width={50} height={0} alt="Github Logo" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
