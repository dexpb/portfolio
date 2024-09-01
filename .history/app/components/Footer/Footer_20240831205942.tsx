"use client";
import { Button } from "@/components/ui/button";
import WhatsappIcon from "/public/whatsapp-icon.svg";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      to_email: email,
      subject: "Projeto - Front-End",
      message:
        "Olá! Venho diretamente do seu portfólio, gostaria de te contratar para um projeto.",
    };

    emailjs
      .send(
        "service_r4s3qsb",
        "template_z68lg0w",
        templateParams,
        "3t5QwLprwmniP5j1q",
      )
      .then((response) => {
        console.log(
          "E-mail enviado com sucesso!",
          response.status,
          response.text,
        );
        alert("E-mail enviado com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao enviar e-mail:", err);
        alert("Erro ao enviar e-mail");
      });
  };
  return (
    <div className="flex h-[520px] flex-col items-center justify-center gap-5 bg-emph-darker font-josefin font-bold">
      <h1 className="text-center text-3xl text-white lg:text-5xl">
        E aí? &quot;Bora&quot; criar algo?{" "}
      </h1>
      <form onSubmit={sendEmail} className="flex w-full justify-center">
        <label className="input input-bordered flex w-3/4 items-center rounded-none border-none bg-dark-mode p-0 pl-2 text-white dark:bg-white dark:text-black lg:w-2/6">
          <input
            type="email"
            className="grow"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex h-full w-14 cursor-pointer items-center justify-center border-none bg-emph-light dark:bg-emph-dark">
            <button type="submit" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-8 w-10 opacity-100 transition-all active:bg-emph-darker"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
            </button>
          </div>
        </label>
      </form>

      <h2 className="text-4xl italic text-emph-dark dark:text-white">Ou</h2>

      <div>
        <Button
          variant="outline"
          className="w-66 h-16 gap-2 rounded-3xl border-4 border-whatsapp text-xl font-bold text-whatsapp dark:hover:text-white"
        >
          Mandar Mensagem
          <Image src={WhatsappIcon} width={30} height={0} alt="" />
        </Button>
      </div>
    </div>
  );
}
