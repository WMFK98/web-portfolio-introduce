import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoMenu } from "react-icons/io5";
import { useNavbarAnimation } from "../hooks/useNavbarAnimation";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function MenuPh() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useNavbarAnimation(isOpen);

  return (
    <div ref={scope}>
      <div
        onClick={() => setIsOpen((state) => !state)}
        className="fixed right-5 top-5 z-[1000]"
      >
        {isOpen ? (
          <FaXmark className="top" size={"43px"} />
        ) : (
          <IoMenu className="top" size={"43px"} />
        )}
      </div>

      <div
        className={`fixed inset-0 transition-all duration-300 ${isOpen ? "z-[999]" : "z-[-999]"}`}
      >
        <nav
          className={`flex h-screen w-screen flex-col items-center ${isOpen ? "opacity-75" : "opacity-0"} bg-pr-black-200`}
        >
          <div className="fixed h-[30%] w-screen bg-gradient-to-b from-pr-black-100 to-pr-black-200" />
        </nav>
        <ul className="absolute top-0 flex h-screen w-screen flex-col items-center gap-3 pt-[30%] text-white">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={0}
              className="btn btn-ghost btn-lg w-[160px] rounded-3xl border-none py-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <hr />
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={50}
              className="btn btn-ghost btn-lg w-[160px] rounded-3xl border-none py-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <hr />
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={50}
              className="btn btn-ghost btn-lg w-[160px] rounded-3xl border-none py-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}
