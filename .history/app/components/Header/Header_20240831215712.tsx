"use client";
import Image from "next/image";
import DarkModeLogo from "/public/darkmode-logo.svg";
import LightModeLogo from "/public/lightmode-logo.svg";
import Link from "next/link";
import { ModeToggle } from "../toggle.mode";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <div className="m-5 flex items-center gap-10 font-josefin font-bold lg:mt-5 justify-evenly lg:gap-0 lg:text-2xl">
      <div className="flex items-center justify-center">
         <Image
          src={DarkModeLogo}
          width={50}
          alt=""
          className="hidden mr-6 dark:block"
        />
        <Image
          src={LightModeLogo}
          width={50}
          alt=""
          className="mr-6 dark:hidden"
        />
        
        <h1 className="mt-2 text-emph-dark dark:text-white">Pablo Corrêa</h1>
      </div>
      <ModeToggle />
      <nav className="hidden lg:flex">
        <ul className="hidden lg:items-center lg:justify-center gap-20 font-bold text-emph-dark dark:text-white lg:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={`p-2 transition-all hover:rounded hover:bg-emph-dark hover:text-white dark:hover:bg-white hover:dark:text-emph-dark ${
                  link.special
                    ? "flex h-14 items-center bg-emph-dark px-3 text-white"
                    : ""
                }`}
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/*  <Link
          href="sobre"
          className="p-2 transition-all hover:rounded hover:bg-emph-dark hover:text-white dark:hover:bg-white hover:dark:text-emph-dark"
        >
          sobre
        </Link>
        <Link
          href="projetos"
          className="p-2 transition-all hover:rounded hover:bg-emph-dark hover:text-white dark:hover:bg-white hover:dark:text-emph-dark"
        >
          projetos
        </Link>
        <Link
          href="contato"
          className="flex h-14 items-center bg-emph-dark px-3 text-white"
        >
          contato
        </Link> */}
      </nav>
    </div>
  );
}
