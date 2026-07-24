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
import { TbBrandCpp, TbBrandCSharp, TbBrandKotlin, TbHomeStats } from "react-icons/tb";
import { SiSqlite, SiQt } from "react-icons/si";
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
    title: "Languages",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C / C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "C#", logoComponent: TbBrandCSharp, color: "#7C3AED" },
      { title: "R", logoComponent: TbHomeStats, color: "#198CE7" },
      { title: "OCaml", logoComponent: FaCodeBranch, color: "#F97316" },
      { title: "Go", logoComponent: FaGolang, color: "#70574a" },
      { title: "Kotlin", logoComponent: TbBrandKotlin, color: "#7F52FF" },
      { title: "HTML", logoComponent: FaHtml5, color: "#178f1f" },
      { title: "CSS", logoComponent: FaCss3, color: "#264de4" },
      { title: "JavaScript", logoComponent: MdJavascript, color: "#f0db4f" },
      { title: "Bash", logoComponent: FaLinux, color: "#4EAA25" },
      { title: "SQLite", logoComponent: SiSqlite, color: "#003B57" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Linux", logoComponent: FaLinux, color: "#FCC624" },
      { title: "Unity", logoComponent: FaUnity, color: "#F97316" },
      { title: "Qt", logoComponent: SiQt, color: "#41CD52" },
      { title: "LaTeX", logoComponent: FaBookOpen, color: "#0A66C2" },
      { title: "HPC / Cluster", logoComponent: FaRobot, color: "#9C27B0" },
    ],
  },
  {
    title: "Technologies & Concepts",
    data: [
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Deep Learning", logoComponent: GiBrain, color: "#E91E63" },
      { title: "Computer Vision", logoComponent: GiBrain, color: "#FF9800" },
      { title: "VR / AR / 3D", logoComponent: FaLaptopCode, color: "#06B6D4" },
      { title: "API & Web", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Algorithms", logoComponent: FaCodeBranch, color: "#4CAF50" },
    ],
  },
];