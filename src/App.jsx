import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import "./style/index.css";
import Background from "./ui/Background";
import { IoMenu } from "react-icons/io5";
import { createPortal } from "react-dom";
import MenuPh from "./ui/MenuPh";

function App() {
  return (
    <>
      <div className="relative flex w-max flex-col font-inknut text-white">
        <Background />
        <MenuPh />
        <Home />
        <About />
        <Projects />
        {/* <Activities /> */}
      </div>
    </>
  );
}

export default App;
