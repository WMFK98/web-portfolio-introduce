import Home from './pages/Home';
import SilderBar from './ui/SildeBar';
import './style/index.css';
import ContainerPage from './ui/ContainerPage';

function App() {
  return (
    <>
      <div className="text-white flex flex-col">
        <SilderBar />
        <ContainerPage>
          <Home />
        </ContainerPage>
        <ContainerPage>
          <Home />
        </ContainerPage>
      </div>
    </>
  );
}

export default App;
