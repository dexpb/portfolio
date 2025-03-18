"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Github from "/public/github-icon.svg";
import JeffDesign from "/public/jeff-design.png";
import { motion } from "framer-motion";
import FswBarber from "/public/fsw-barber.png";
import TodoListImage from "/public/todo-list.jpeg";
import { fadeIn } from "../Variant/Variants";
import PhotoTravel from "/public/photo-travel-mockup.png";

export function Projects() {
  return (
    <motion.div
      variants={fadeIn("right", 0.01)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      id="projetos"
      className="m-10 flex h-3/5 flex-1 flex-col gap-20 lg:m-20 text-balance"
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
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 xl:group-hover:bottom-20 2xl:group-hover:bottom-48">
            <h2 className="hidden text-3xl font-bold 2xl:block">Front-end</h2>
            <p className="hidden xl:block xl:text-sm 2xl:text-lg">
              Landing page desenvolvida com React, CSS e Framer Motion
            </p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:left-5 lg:group-hover:bottom-20 xl:left-12 xl:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">Jeff Design</h2>
          </div>
          <a href="https://jeffdesign.vercel.app/">
            <Button
              variant="outline"
              className="lg:w-30 absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:left-10 lg:h-10 lg:group-hover:bottom-5 xl:h-12 xl:w-36 2xl:h-14 2xl:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-32 lg:group-hover:bottom-5 xl:left-52 xl:group-hover:bottom-6 2xl:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/jeffdesign">
              <Image src={Github} width={50} alt="Github Logo" />
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={FswBarber}
            alt="FSW Barber Imagem"
            className="h-full transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 xl:group-hover:bottom-20 2xl:group-hover:bottom-48">
            <h2 className="hidden text-3xl font-bold 2xl:block">Full-stack</h2>
            <p className="hidden xl:block xl:text-sm 2xl:text-lg">
              Projeto da Full Stack Week, utilizando NextJS, TypeScript, Shadcn
              e Prisma.{" "}
            </p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:left-5 lg:group-hover:bottom-20 xl:left-12 xl:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">FSW Barber</h2>
          </div>
          <a href="https://fsw-barber-sand.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:h-12 lg:w-36 lg:group-hover:bottom-5 2xl:h-14 2xl:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-52 lg:group-hover:bottom-6 2xl:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/fsw-barber">
              <Image src={Github} width={50} height={0} alt="Github Logo" />
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={TodoListImage}
            alt="Todo List"
            className="h-full transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 xl:group-hover:bottom-20 2xl:group-hover:bottom-48">
            <h2 className="hidden text-3xl font-bold 2xl:block">Full Stack</h2>
            <p className="hidden xl:block xl:text-sm 2xl:text-lg">
              Projeto Full Stack feito com React, NodeJs e Prisma para guardar
              os dados.{" "}
            </p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:left-5 lg:group-hover:bottom-20 xl:left-12 xl:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">Todo List</h2>
          </div>
          <a href="https://todolist-teste.vercel.app/">
            <Button
              variant="outline"
              className="2xl:group-hover:bottom-100 absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:h-12 lg:w-36 lg:group-hover:bottom-5 2xl:h-14 2xl:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-52 lg:group-hover:bottom-6 2xl:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/todolist-teste">
              <Image src={Github} width={50} height={0} alt="Github Logo" />
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border-2 border-white/50 text-white lg:w-1/3">
          <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
          <Image
            src={PhotoTravel}
            alt="Todo List"
            className="transition-all duration-500 group-hover:scale-125 group-hover:blur"
          />
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-32 lg:group-hover:bottom-20 2xl:group-hover:bottom-48">
            <h2 className="hidden text-3xl font-bold 2xl:block">Front-end</h2>
            <p className="hidden xl:block xl:text-sm 2xl:text-lg">
              Landing page para agência de fotografias e viagens.{" "}
            </p>
          </div>
          <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-24 lg:left-5 lg:group-hover:bottom-20 xl:left-12 xl:group-hover:bottom-36">
            <h2 className="text-lg lg:text-2xl">Photo Travel</h2>
          </div>
          <a href="https://photo-travel-tau.vercel.app/">
            <Button
              variant="outline"
              className="absolute -bottom-full left-12 z-50 h-16 w-24 rounded-3xl font-bold text-white shadow-2xl shadow-emph-dark transition-all duration-700 group-hover:bottom-[20px] lg:h-12 lg:w-36 lg:group-hover:bottom-5 2xl:h-14 2xl:group-hover:bottom-20"
            >
              Ver Projeto
            </Button>
          </a>

          <div className="absolute -bottom-full left-44 z-50 transition-all duration-700 group-hover:bottom-[30px] lg:left-52 lg:group-hover:bottom-6 2xl:group-hover:bottom-[84px]">
            <a href="https://github.com/dexpb/photo-travel">
              <Image src={Github} width={50} height={0} alt="Github Logo" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
