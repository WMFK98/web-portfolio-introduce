import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoMenu } from "react-icons/io5";
import { useMenuAnimation } from "../hooks/useMenuAnimation";

export default function MenuPh() {
  const [isOpen, setIsOpen] = useState(true);
  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope}>
      <IoMenu
        onClick={() => setIsOpen((state) => !state)}
        className="fixed right-5 top-5 z-[1000]"
        size={"43px"}
      />
      {createPortal(
        <nav className="fixed inset-0 h-screen w-screen bg-pr-black-200 opacity-[75%]">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </nav>,
        document.body,
      )}
      ,
    </div>
  );
}
