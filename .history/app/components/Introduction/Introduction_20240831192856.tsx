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
