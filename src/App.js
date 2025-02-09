import './App.css';
import Awards from './pages/awards';
import Intro from './pages/intro';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
      <Projects />
      <Awards />
    </div>
  );
}

export default App;
