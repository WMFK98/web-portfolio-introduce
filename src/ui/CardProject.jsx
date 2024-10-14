import { animate, inView, useInView } from "framer-motion";

import React, { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function CardProject({ project, postion }) {
  const { image, topic, info, demo, github, stacks } = project;
  const [showInfo, setShowInfo] = useState();

  return (
    <div
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="project relative flex max-h-[20vh] min-h-[140px] overflow-hidden rounded-lg lg:max-h-full lg:min-h-full"
    >
      <div className="cardProject flex max-h-full min-h-full w-full flex-col items-end justify-between gap-1 p-2 lg:max-h-full lg:min-h-full">
        <div className="flex gap-2">
          <a target="_blank" href={github}>
            <button className="group btn btn-sm rounded-full hover:bg-pr-button">
              <FaGithub className="group-hover:text-pr-black-200" />
            </button>
          </a>
          <a target="_blank" href={demo}>
            <button className="group btn btn-sm rounded-full hover:bg-pr-button">
              <FaExternalLinkAlt className="group-hover:text-pr-black-200" />
            </button>
          </a>
        </div>
        {showInfo && (
          <div className="flex w-full flex-auto flex-col items-center justify-center gap-1 text-center text-ph-sm lg:gap-2 lg:text-des-sm">
            <p>{topic}</p>
            <hr className="border-1 w-[70%] border-white" />
            <p>{info}</p>
          </div>
        )}

        <ul className="mr-auto flex gap-2">
          {stacks.map((icon, index) => (
            <li key={index}>{icon}</li>
          ))}
        </ul>
      </div>

      <img
        className={`absolute z-[-1] ${showInfo && "opacity-15"} h-full w-full object-cover ${postion || "object-center"} transition-all duration-200 hover:bg-black`}
        src={image}
        alt="the-wild-oasis-customer"
      />
    </div>
  );
}
