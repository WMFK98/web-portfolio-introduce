import React from "react";
import Contact from "../ui/Contact";
import ContainerPage from "../ui/ContainerPage";

export default function Home() {
  return (
    <ContainerPage type="center">
      <img
        src="/images/ItsMe.webp"
        className="w-[180px] rounded-full"
        alt="fluke"
      />
      <div className="w-full text-ph-lg uppercase">
        <p>web</p> <p>delevoper</p>
      </div>
      <p className="text-ph-sm font-light leading-[35px]">
        I am an enthusiastic IT student at KMUTT with a passion for learning and
        a strong foundation in programming.
      </p>
      <Contact />
      <div className="w-full">
        <button className="btn rounded-[25px] bg-pr-button px-8 text-pr-black-100 hover:bg-sky-200">
          Start
        </button>
      </div>
    </ContainerPage>
  );
}
