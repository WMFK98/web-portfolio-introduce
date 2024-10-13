import React from "react";
import ContainerPage from "../ui/ContainerPage";
import ListSkill from "../ui/ListSkill";
import Topic from "../ui/Topic";
export default function About() {
  return (
    <ContainerPage id="about">
      <div className="flex w-full flex-col gap-[33px] lg:gap-[66px]">
        <Topic>About Me</Topic>
        <div className="flex w-full flex-col justify-between gap-[33px] lg:flex-row">
          <div className="space-y-2">
            <p className="lg:text-des-md text-ph-md">Info</p>
            <hr />
            <p className="lg:text-des-sm text-ph-sm font-light leading-7 lg:leading-[4rem]">
              Nickname: Fluke <br /> Name : Wichira Marakompa <br /> Birthdate:
              8 april 2004 <br /> Interest: front-end developer, Hobbies: Game,
              Gym, Movie
            </p>
          </div>
          <div className="w-[50%]">
            <div className="m-auto hidden h-[377px] w-[277px] overflow-hidden lg:block">
              <img
                className="m-auto h-full scale-x-[-1] rounded-lg object-cover"
                src="/images/about-me.webp"
                alt="about-me.webp"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[33px] lg:flex-row">
          <div className="space-y-2 lg:order-1 lg:w-[50%]">
            <p className="lg:text-des-md text-ph-md">Education</p>
            <hr />
            <div className="lg:text-des-sm text-ph-sm font-light leading-7 lg:leading-10">
              <p>King Mongkut's University of Technology Thonburi (KMUTT) </p>
              <p className="ml-[30px] list-item">
                bachelor of Science in Information Technology (IT) - Information
                Technology (IT)
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="lg:text-des-md text-ph-md">Skills</p>
            <hr />
            <ListSkill />
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
