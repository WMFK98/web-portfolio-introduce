import React, { useRef, useState } from "react";
import CardProject from "./CardProject";
import imgOasisCus from "/images/projects/the-wild-oasis-customer.webp";
import imgOasisStaff from "/images/projects/the-wild-oasis-staff.webp";
import imgHelloWorld from "/images/projects/hello-world.webp";
import imgBankistLanding from "/images/projects/bankist-landing.webp";
import imgBankistApp from "/images/projects/bankist-app.webp";
import imgKaban from "/images/projects/kaban-board.webp";
import imgPigV2 from "/images/projects/pig-game-v2.webp";
import imgMapty from "/images/projects/mapty.webp";
import imgFokify from "/images/projects/fokify-app.webp";

import {
  SiTypescript,
  SiJavascript,
  SiReactquery,
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
  FaHtml5,
  FaCss3,
  FaSass,
} from "react-icons/fa";
import { useInView } from "framer-motion";
import useSlideAnimation from "../hooks/useSlideAnimation";

const projects = [
  {
    topic: "Karban To-Do Management",
    info: "Web application for managing to-do lists with boards, tasks, and user statuses.",
    image: imgKaban,
    stacks: [
      <FaVuejs />,
      <SiJavascript />,
      <SiTailwindcss />,
      <SiSpringboot />,
      <FaJava />,
      <SiMysql />,
      <SiNginx />,
      <SiDocker />,
      <SiUbuntu />,
      <FaLinux />,
    ],
    demo: "https://intproj23.sit.kmutt.ac.th/at3",
    github: "https://github.com/Integrated-Project-AT-03/integrated-frontend",
  },
  {
    topic: "The Wild Oasis - Customer",
    info: "Hotel booking system for customers and staff",
    image: imgOasisCus,
    stacks: [
      <RiNextjsFill />,
      <SiTailwindcss />,
      <SiJavascript />,
      <SiSupabase />,
      <SiVercel />,
    ],
    demo: "https://the-wild-osis-customer-fix.vercel.app",
    github: "https://github.com/WMFK98/the-wild-osis-customer",
  },
  {
    topic: "The Wild Oasis - Staff",
    info: "Hotel booking system for customers and staff",
    image: imgOasisStaff,
    stacks: [
      <FaReact />,
      <SiReactquery />,
      <SiStyledcomponents />,
      <SiJavascript />,
      <SiSupabase />,
      <SiVercel />,
    ],
    demo: "https://the-wild-osis.vercel.app",
    github: "https://github.com/WMFK98/the-wild-osis",
  },

  {
    topic: "Hello Goose",
    info: "Web landing page created to promote the Hello World camp",
    image: imgHelloWorld,
    stacks: [<FaReact />, <SiTypescript />, <SiTailwindcss />, <SiVercel />],
    demo: "https://hello-goose-iota.vercel.app",
    github: "https://github.com/Hello-Goose/Hello-Goose",
  },
  {
    topic: "Pig Game",
    info: "Web-Based, two-player game based on the classic Pig game.",
    image: imgPigV2,
    stacks: [<FaVuejs />, <SiJavascript />, <SiTailwindcss />, <SiVercel />],
    demo: "https://project-2-sec-2-work-life-no-balance.vercel.app/home",
    github: "https://github.com/WMFK98/PROJECT2-SEC-2-Work-Life-No-Balance",
  },
  {
    topic: "Forkify App",
    info: "Developed a recipe management application for storing and recording various recipes.",
    image: imgFokify,
    stacks: [
      <FaHtml5 />,
      <FaCss3 />,
      <SiJavascript />,
      <FaSass />,
      <SiVercel />,
    ],
    demo: "https://forkify-nine-mu.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },

  {
    topic: "Mapty",
    info: "Web application for planning workouts by pinning locations on a map",
    image: imgMapty,
    stacks: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <SiVercel />],
    demo: "https://mapty-orcin.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
  {
    topic: "Bankist Landing",
    info: "Banking website lading page.",
    image: imgBankistLanding,
    stacks: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <SiVercel />],
    demo: "https://bankinst-landing-page.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
  {
    topic: "Bankist App",
    info: "Simulated banking website for managing transactions.",
    image: imgBankistApp,
    stacks: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <SiVercel />],
    demo: "https://bankist-accounting.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
];
export default function ListCardProject() {
  const [isLazyShow, setIsLazyShow] = useState(true);
  const show = isLazyShow ? 4 : projects.length;
  const btn = useRef();
  const page = useRef();
  const isInViewBtn = useInView(btn);
  const isInViewProjects = useInView(page);
  const scope = useSlideAnimation(isInViewProjects);
  return (
    <>
      <div ref={scope}>
        <ul className="projects flex flex-col gap-5" ref={page}>
          {projects
            .map((project, index) => (
              <CardProject key={index} project={project} />
            ))
            .slice(0, show)}
          <button
            ref={btn}
            onClick={() => setIsLazyShow((state) => !state)}
            className="border-10 btn btn-ghost m-auto w-max rounded-xl border-nor-button px-5"
          >
            {isLazyShow ? "Show More" : "Hidden"}
          </button>
        </ul>
      </div>
      {isInViewProjects && !isInViewBtn && !isLazyShow && (
        <div className="flex justify-center">
          <button
            ref={btn}
            onClick={() => setIsLazyShow((state) => !state)}
            className="border-10 btn btn-ghost fixed top-[90%] rounded-xl border-nor-button bg-nor-button px-5"
          >
            {isLazyShow ? "Show More" : "Hidden"}
          </button>
        </div>
      )}
    </>
  );
}
