import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
export default function Contact() {
  return (
    <ul className="flex w-full items-center gap-3 text-center lg:order-1">
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/wichira-matrakampa-415107238"
        >
          <FaLinkedin className="btn-icon size-[46px] lg:size-[60px]" />
        </a>
      </li>

      <li className="">
        <a target="_blank" href="https://github.com/WMFK98">
          <FaGithubSquare className="btn-icon size-[46px] lg:size-[60px]" />
        </a>
      </li>
      <li>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-white hover:bg-pr-button lg:h-[50px] lg:w-[50px]">
          <a
            target="_blank"
            href="https://medium.com/@wishira2013.coth"
            className="btn btn-ghost h-max w-max p-2"
          >
            <FaMedium className="size-[32px] text-pr-black-200 lg:size-[40px]" />
          </a>
        </div>
      </li>
    </ul>
  );
}
