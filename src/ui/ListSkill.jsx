import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiSpringboot,
  SiSupabase,
  SiMysql,
  SiNginx,
  SiDocker,
  SiUbuntu,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaVuejs,
  FaJava,
  FaLinux,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
export default function ListSkill() {
  const iconSkills = [
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiReactquery />, name: "React Query" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <SiStyledcomponents />, name: "Styled Components" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <SiUbuntu />, name: "Ubuntu" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <ul className="grid grid-cols-6 gap-3">
      {iconSkills.map(({ icon, name }, index) => (
        <li key={index} className="tooltip" data-tip={name}>
          {React.cloneElement(icon, {
            size: "40px",
            className: "btn-icon tooltip",
          })}
        </li>
      ))}
    </ul>
  );
}
