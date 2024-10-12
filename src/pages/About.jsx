import React from "react";
import ContainerPage from "../ui/ContainerPage";
import ListSkill from "../ui/ListSkill";
export default function About() {
  return (
    <ContainerPage id="about">
      <header className="text-center text-ph-lg">About Me</header>
      <div className="space-y-2">
        <p className="text-ph-md">Info</p>
        <hr />
        <p className="text-ph-sm font-light leading-7">
          Nickname: Fluke <br /> Name : Wichira Marakompa <br /> Birthdate: 8
          april 2004 <br /> Interest: front-end developer, Hobbies: Game, Gym,
          Movie
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-ph-md">Education</p>
        <hr />
        <div className="text-ph-sm font-light leading-7">
          <p>King Mongkut's University of Technology Thonburi (KMUTT) </p>
          <p className="ml-[30px] list-item">
            bachelor of Science in Information Technology (IT) - Information
            Technology (IT)
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-ph-md">Skills</p>
        <hr />
        <ListSkill />
      </div>
    </ContainerPage>
  );
}
