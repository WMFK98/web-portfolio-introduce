import React from "react";
import ContainerPage from "../ui/ContainerPage";

import CardProject from "../ui/CardProject";

export default function Projects() {
  return (
    <ContainerPage>
      <header className="text-center text-ph-lg">Projects</header>
      <CardProject /> <CardProject /> <CardProject />
      <button className="border-10 btn btn-ghost m-auto w-max rounded-xl border-[#3B4752] px-5">
        Show More
      </button>
    </ContainerPage>
  );
}
