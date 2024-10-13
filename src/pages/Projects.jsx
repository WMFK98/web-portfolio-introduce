import React from "react";
import ContainerPage from "../ui/ContainerPage";
import ListCardProject from "../ui/ListCardProject";
import Topic from "../ui/Topic";

export default function Projects() {
  return (
    <ContainerPage id="projects">
      <div className="flex max-h-max min-h-full w-full flex-col gap-[33px] lg:gap-[66px]">
        <Topic>Projects</Topic>
        <ListCardProject />
      </div>
    </ContainerPage>
  );
}
