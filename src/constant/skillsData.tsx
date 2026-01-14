import React from "react";

import {
  FaGitAlt,
  FaGithub,
  FaPython,
  FaLaptopCode,
  FaRobot,
  FaBookOpen,
  FaCodeBranch,
  FaGolang,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaUnity,
} from "react-icons/fa6";

import { TbAssembly, TbBrandCpp, TbBrandCSharp, TbHomeStats, TbSql } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdApi, MdJavascript } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}


export const skillsData: SkillsDataProps[] = [
  {
    title: "Langages",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C / C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "C#", logoComponent: TbBrandCSharp, color: "#7C3AED" },
      { title: "R", logoComponent: TbHomeStats, color: "#198CE7" },
      { title: "OCaml", logoComponent: FaCodeBranch, color: "#F97316" },
      { title: "Go", logoComponent: FaGolang, color: "#70574a" },
      { title: "HTML", logoComponent: FaHtml5, color: "#178f1f" },
      { title: "CSS", logoComponent: FaCss3, color: "#264de4" },
      { title: "JavaScript", logoComponent: MdJavascript, color: "#f0db4f" },
      { title: "Bash", logoComponent: FaLinux, color: "#4EAA25" },
      { title: "SQL", logoComponent: TbSql, color: "#F97316" },
      { title: "Assembly", logoComponent: TbAssembly, color: "#d4d4d8" },
    ],
  },
  {
    title: "Outils & Plateformes",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Cluster / HPC", logoComponent: FaRobot, color: "#9C27B0" },
      { title: "Unity", logoComponent: FaUnity, color: "#F97316" },
      { title: "LaTeX", logoComponent: FaBookOpen, color: "#0A66C2" },
    ],
  },
  {
    title: "Technos & Concepts",
    data: [
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Computer Vision", logoComponent: GiBrain, color: "#FF9800" },
      { title: "VR / 3D", logoComponent: FaLaptopCode, color: "#06B6D4" },
      { title: "API & Web", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Algorithmes", logoComponent: FaCodeBranch, color: "#4CAF50" },
    ],
  },
];
