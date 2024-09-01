"use client";
import { AppWindow, Code, TabletSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants/Variants";

export function Services() {
  return (
    <div className="flex flex-col items-center my-20 gap-10">
      <motion.h1
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-5xl lg:text-7xl font-semibold uppercase text-emph-dark dark:text-white"
      >
        Serviços
      </motion.h1>

      <div className="flex flex-col items-center justify-center lg:flex-row ">
        <div className="flex w-[300px] flex-col gap-10 lg:m-20 lg:h-[350px] lg:w-4/6 lg:flex-row">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12"
          >
            <AppWindow size={50} className="text-white"/>
            <h2 className="text-lg lg:text-xl font-bold text-white dark:text-white">Desenvolvimento</h2>
            <p className="text-pretty text-white dark:text-white">
              Desenvolvo sites profissionais com qualidade e beleza para que
              você e sua empresa possam aparecer para o mundo.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12"
          >
            <TabletSmartphone size={50} className="text-white" />
            <h2 className="text-xl font-bold text-white dark:text-white">Responsividade</h2>
            <p className="text-pretty text-white dark:text-white">
              Deixando o Design da sua página sempre responsiva para que sua
              página fique perfeitamente adaptada a tela do seu aparelho.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12"
          >
            <Code size={50} className="text-white" />
            <h2 className="text-xl font-bold text-white dark:text-white">UI/UX</h2>
            <p className="text-pretty text-white dark:text-white">
              Posso criar o Design da sua página profissional para que seja
              clara, confortável, intuitiva e chamativa visualmente para o
              usuário.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
