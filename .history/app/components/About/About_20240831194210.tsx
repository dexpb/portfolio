"use client";
import Photo from "/public/pablo-image.jpg";
import Linkedin from "/public/linkedin-icon.svg";
import Github from "/public/github-icon.svg";
import Email from "/public/email-icon.svg";
import Image from "next/image";
import DarkEmail from "/public/darkmode-email.svg";
import DarkGithub from "/public/darkmode-github.svg";
import DarkLinkedin from "/public/darkmode-linkedin.svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";
export default function About() {
  return (
    <motion.div
      variants={fadeIn("right", 0.01)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      id="sobre"
      className="flex h-full w-screen items-center justify-center font-josefin text-white dark:text-emph-dark"
    >
      <div className="ml-20 hidden h-[750px] w-[380px] rounded-[80px] bg-dark-mode dark:bg-white lg:flex">
        <div className="m-auto flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Photo}
              width={160}
              height={0}
              alt=""
              className="rounded-xl"
            />
            <h1 className="text-4xl font-extrabold">Pablo Corrêa</h1>
            <p className="text-balance text-center text-[25px] font-semibold leading-8 text-zinc-400">
              Desenvolvedor Front-end Junior
            </p>
          </div>

          <div className="text-break flex flex-col items-center justify-center gap-4 text-center text-lg text-zinc-200 dark:text-zinc-600">
            <p>
              Amante de jogos competitivos como: Call of Duty, League of Legends
              e Counter-strike. Também curto filmes da Marvel. Filme preferido?
              Vingadores: Ultimato
            </p>
            <p>
              Nas horas vagas estou estudando, criando projetos ou tirando um
              tempinho para assistir os animes da temporada.
            </p>
          </div>
        </div>
      </div>
      <div className="my-40 ml-4 hidden flex-col gap-10 lg:flex">
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

      <div className="m-36 flex w-full flex-col items-center lg:w-3/5 lg:items-start lg:justify-start">
        <h1 className="text-center text-7xl font-bold text-text-dark dark:text-white lg:justify-start lg:text-left lg:text-9xl">
          SOBRE
        </h1>
        <p className="text-center text-2xl text-text-dark dark:text-white lg:ml-10 lg:text-wrap lg:text-left  lg:leading-[50px]">
          Sou desenvolvedor com foco em
          <span className="text-emph-light dark:text-emph-dark">
            {" "}
            front-end{" "}
          </span>
          e atualmente estou no nível
          <span className="text-emph-light dark:text-emph-dark"> Junior</span>.
          Também faço graduação em{" "}
          <span className="text-emph-light dark:text-emph-dark">
            {" "}
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          e estou em busca da minha primeira oportunidade como Dev. Caso tenha
          interesse em me contratar para algum serviço Front-end, é só me
          <span className="dark:text-emph-dark"> chamar</span>!
        </p>
        <div className="m-10 flex gap-10">
          <a href="/pablo-cv.pdf">
            <Button
              variant="outline"
              className="h-16 w-44 rounded-3xl border-4 border-emph-dark bg-emph-dark font-bold text-white shadow-2xl shadow-emph-dark dark:bg-transparent dark:hover:bg-emph-dark lg:w-56"
            >
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
