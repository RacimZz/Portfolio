import React from "react";

import {
  FaGitAlt,
  FaGithub,
  FaPython,
  FaLaptopCode,
  FaRobot,
  FaBookOpen,
  FaCodeBranch,
} from "react-icons/fa6";

import { TbBrandCpp } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

/**
 * Skills (version initiale)
 * Déduites à partir de tes projets (VR/3D, ML, systèmes, analyse de données).
 * On pourra enrichir ensuite (niveau, outils, etc.).
 */
export const skillsData: SkillsDataProps[] = [
  {
    title: "Langages",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C / C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "C#", logoComponent: FaLaptopCode, color: "#7C3AED" },
      { title: "R", logoComponent: FaBookOpen, color: "#198CE7" },
      { title: "OCaml", logoComponent: FaCodeBranch, color: "#F97316" },
      { title: "ARM (Assembly)", logoComponent: FaCodeBranch, color: "#d4d4d8" },
    ],
  },
  {
    title: "Outils & Plateformes",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Cluster / HPC", logoComponent: FaRobot, color: "#9C27B0" },
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
