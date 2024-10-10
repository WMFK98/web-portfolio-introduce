import React from "react";
import ContainerPage from "../ui/ContainerPage";

import CardProject from "../ui/CardProject";
import ListCardProject from "../ui/ListCardProject";

export default function Projects() {
  return (
    <ContainerPage>
      <header className="text-center text-ph-lg">Projects</header>
      <ListCardProject />
    </ContainerPage>
  );
}
