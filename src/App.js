import './App.css';
import Intro from './pages/intro';
import Projects from './pages/projects';
import Resume from './pages/resume';
function App() {
  return (
    <div className="App">
      <Intro />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
