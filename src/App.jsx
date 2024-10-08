import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./style/index.css";
import Background from "./ui/Background";

function App() {
  return (
    <>
      <div className="flex flex-col font-inknut text-white">
        <Background />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
