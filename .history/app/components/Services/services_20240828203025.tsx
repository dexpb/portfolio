"use client"

import { AppWindow, Code, TabletSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants/Variants";

export function Services() {
  return (
    <div className="flex flex-col items-center gap-10">
      <motion.h1 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }} className="text-6xl font-semibold uppercase">Serviços</motion.h1>

      <div className="flex h-[350px] w-full flex-col items-center justify-center lg:flex-row">
        <div className="m-20 flex w-4/6 gap-10">
        <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12"> 
            <AppWindow size={50} />
            <h2 className="text-lg font-bold">Desenvolvimento</h2>
            <p className="text-pretty">
              Desenvolvo sites profissionais com qualidade e beleza para que
              você possa e sua empresa possam aparecer para o mundo.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }} className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12">
            <TabletSmartphone size={50} />
            <h2 className="text-lg font-bold">Responsividade</h2>
            <p className="text-pretty">
              Deixando o Design da sua página sempre responsiva para que sua
              página fique perfeitamente adaptada a tela do seu aparelho.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }} className="flex flex-col gap-5 rounded-lg bg-emph-darker p-12">
            <Code size={50} />
            <h2 className="text-lg font-bold">UI/UX</h2>
            <p className="text-pretty">
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
