import React, { useState } from "react";
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
const projects = [
  {
    topic: "The Wild Oasis - Customer",
    info: "Hotel booking system for customers and staff",
    image: imgOasisCus,
    demo: "https://the-wild-osis-customer-fix.vercel.app",
    github: "https://github.com/WMFK98/the-wild-osis-customer",
  },
  {
    topic: "The Wild Oasis - Staff",
    info: "Hotel booking system for customers and staff",
    image: imgOasisStaff,
    demo: "https://the-wild-osis.vercel.app",
    github: "https://github.com/WMFK98/the-wild-osis",
  },
  {
    topic: "Karban To-Do Management",
    info: "Web application for managing to-do lists with boards, tasks, and user statuses.",
    image: imgKaban,
    demo: "https://intproj23.sit.kmutt.ac.th/at3",
    github: "https://github.com/Integrated-Project-AT-03/integrated-frontend",
  },
  {
    topic: "Hello Goose",
    info: "Web landing page created to promote the Hello World camp",
    image: imgHelloWorld,
    demo: "https://hello-goose-iota.vercel.app",
    github: "https://github.com/Hello-Goose/Hello-Goose",
  },
  {
    topic: "Pig Game",
    info: "Web-Based, two-player game based on the classic Pig game.",
    image: imgPigV2,
    demo: "https://project-2-sec-2-work-life-no-balance.vercel.app/home",
    github: "https://github.com/WMFK98/PROJECT2-SEC-2-Work-Life-No-Balance",
  },
  {
    topic: "Forkify App",
    info: "Developed a recipe management application for storing and recording various recipes.",
    image: imgFokify,
    demo: "https://forkify-nine-mu.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },

  {
    topic: "Mapty",
    info: "Web application for planning workouts by pinning locations on a map",
    image: imgMapty,
    demo: "https://mapty-orcin.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
  {
    topic: "Bankist Landing",
    info: "Banking website lading page.",
    image: imgBankistLanding,
    demo: "https://bankinst-landing-page.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
  {
    topic: "Bankist App",
    info: "Simulated banking website for managing transactions.",
    image: imgBankistApp,
    demo: "https://bankist-accounting.vercel.app",
    github: "https://github.com/WMFK98/complete-javascript-course",
  },
];
export default function ListCardProject() {
  const [isLazyShow, setIsLazyShow] = useState(true);
  const show = isLazyShow ? 4 : projects.length;

  return (
    <>
      {projects
        .map((project, index) => <CardProject key={index} project={project} />)
        .slice(0, show)}
      <button
        onClick={() => setIsLazyShow((state) => !state)}
        className="border-10 btn btn-ghost m-auto w-max rounded-xl border-nor-button px-5"
      >
        {isLazyShow ? "Show More" : "Hidden"}
      </button>
    </>
  );
}
