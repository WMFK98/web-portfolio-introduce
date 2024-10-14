import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import "./style/index.css";
import Background from "./ui/Background";
import { IoMenu } from "react-icons/io5";
import { createPortal } from "react-dom";
import MenuPh from "./ui/MenuPh";
import SlidebarDes from "./ui/SlidebarDes";
import { useRef } from "react";
import { useFollowPointer } from "./hooks/useFollowPointer";
import { motion, useInView } from "framer-motion";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const trigger = { homeRef, aboutRef, projectRef };
  const sportlightRef = useRef();
  const inViewProject = useInView(projectRef);
  const { x, y } = useFollowPointer(sportlightRef);

  return (
    <>
      <div className="max-w-screen relative flex flex-col overflow-hidden font-inknut text-white">
        <Background />
        <MenuPh />
        <Home ref={homeRef} />
        <About />
        <Projects ref={projectRef} />
        <SlidebarDes homeRef={homeRef} />
        <motion.div
          ref={sportlightRef}
          style={{ x, y }}
          className={"overlay"}
        ></motion.div>
      </div>
    </>
  );
}

export default App;
