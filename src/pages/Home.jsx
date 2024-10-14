import React, { forwardRef } from "react";
import Contact from "../ui/Contact";
import ContainerPage from "../ui/ContainerPage";
import { Link } from "react-scroll";

const home = forwardRef((_, ref) => {
  return (
    <ContainerPage id="home" type="center">
     
      <div
        className="flex w-full flex-col items-center gap-4 lg:flex-row"
        ref={ref}
      >
        <div className="w-max md:order-3 lg:w-[20%]">
          <img
            src="/images/ItsMe.webp"
            className="w-[180px] rounded-full"
            alt="fluke"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="inline-block bg-gradient-to-r from-pr-button via-blue-400 to-indigo-400 bg-clip-text text-ph-lg uppercase text-transparent shadow-lg lg:text-des-xl">
            <p className=" ">WM's</p>
            <p className=" ">portfolio</p>
          </div>
          <p className="text-ph-sm font-light leading-[35px] lg:text-des-sm">
            👋 Hi, I'm an enthusiastic IT student at KMUTT with a passion for
            learning and a strong foundation in programming.
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <Contact />
            <div className="w-full lg:w-max">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={50}
                className="btn rounded-[25px] bg-pr-button px-8 text-pr-black-100 hover:bg-sky-200 lg:w-[154px]"
              >
                Let's go
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
});

export default home;
