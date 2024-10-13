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

function App() {
  const homeRef = useRef(null);
  return (
    <>
      <div className="max-w-screen relative flex flex-col overflow-hidden font-inknut text-white">
        <Background />
        <MenuPh />
        <Home ref={homeRef} />
        <About />
        <Projects />
        <SlidebarDes homeRef={homeRef} />
      </div>
    </>
  );
}

export default App;
