import React from "react";
import { Link } from "react-scroll";
import { useSlidebarAnimation } from "../hooks/useSlidebarAnimation";
import { useInView } from "framer-motion";

export default function SlidebarDes({ homeRef }) {
  //   const homeEle = document.getElementById("home");
  //   console.log(homeEle);

  const inView = useInView(homeRef);
  const scope = useSlidebarAnimation(!inView);
  return (
    <nav
      ref={scope}
      className="fixed ml-[-40vh] hidden h-screen justify-center gap-4 px-[35px] text-white lg:flex lg:flex-col"
    >
      <ul className="flex h-full flex-col justify-center gap-4">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={50}
            className="btn btn-ghost w-[154px] rounded-[25px] border-none bg-nor-button px-8 hover:bg-sky-200 hover:text-black"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={50}
            className="btn btn-ghost w-[154px] rounded-[25px] border-none bg-nor-button px-8 hover:bg-sky-200 hover:text-black"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={50}
            className="btn btn-ghost w-[154px] rounded-[25px] border-none bg-nor-button px-8 hover:bg-sky-200 hover:text-black"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
