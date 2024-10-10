import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function CardProject({ project }) {
  const { image, topic, info, demo, github } = project;
  const [showInfo, setShowInfo] = useState();
  return (
    <div
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      className="relative flex h-[152px] overflow-hidden rounded-lg"
    >
      <div className="flex h-full w-full flex-col items-end justify-start gap-2 p-3">
        <div className="flex gap-2">
          <a target="_blank" href={github}>
            <button className="btn btn-sm rounded-full">
              <FaGithub />
            </button>
          </a>
          <a target="_blank" href={demo}>
            <button className="btn btn-sm rounded-full">
              <FaExternalLinkAlt />
            </button>
          </a>
        </div>
        {showInfo && (
          <div className="flex w-full flex-auto flex-col items-center justify-start gap-1 text-center text-ph-sm">
            <p>{topic}</p>
            <hr className="border-1 w-full border-white" />
            <p>{info}</p>
          </div>
        )}
      </div>

      <img
        className={`absolute z-[-1] ${showInfo && "opacity-15"} object-fill transition-all duration-200 hover:bg-black`}
        src={image}
        alt="the-wild-oasis-customer"
      />
    </div>
  );
}
