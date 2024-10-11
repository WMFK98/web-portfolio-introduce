import React, { useState } from "react";
import ContainerPage from "../ui/ContainerPage";
import imge from "/images/activities/hello-goose-2023.webp";

export default function Activities() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <ContainerPage>
      <header className="text-center text-ph-lg">Activities</header>
      <div className="flex flex-col gap-2">
        <div
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
          className="relative flex h-[154px] overflow-hidden rounded-lg"
        >
          <img
            className={`absolute inset-0 z-[-1] h-full w-full object-cover object-center transition-opacity duration-200 ${showInfo ? "opacity-10" : "opacity-100"}`}
            src={imge}
            alt="the-wild-oasis-customer"
          />
        </div>
        <p className="text-center">Starter Pack IT30 (2024) - Speaker</p>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
        <div>
          <div
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="relative flex h-[154px] overflow-hidden rounded-lg"
          >
            <img
              className={`absolute inset-0 z-[-1] object-cover object-center transition-opacity duration-200 ${showInfo ? "opacity-10" : "opacity-100"}`}
              src={imge}
              alt="the-wild-oasis-customer"
            />
          </div>
        </div>
      </div>
    </ContainerPage>
  );
}
