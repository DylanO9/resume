import '../styles/projects.css';
import cryptotracker from '../assets/crypto-tracker.png';
import flutterSafety from '../assets/flutter-safety.jpg';
import palmReading from '../assets/palm-reading.jpg';

import { FaGithub } from 'react-icons/fa';

export default function Projects () {
    return (
        <section id="projects">
            <ul>
                <li>
                    <img src={cryptotracker} className="project-image" alt="Crypto tracker project"></img>
                    <h3>Crypto Tracker</h3>
                    <ul className="technologies-list">
                        <li className="technologies-item">React</li>
                        <li className="technologies-item">Javascript</li>
                        <li className="technologies-item">CSS</li>
                        <li className="technologies-item">Firebase</li>
                    </ul>
                    <a href="https://github.com/DylanO9/Crypto-Tracker" className="projects-github" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                </li>
                <li>
                    <img src={palmReading} className="project-image" alt="Palm Reading Project"></img>
                    <h3>Palm Reading</h3>
                    <ul className="technologies-list">
                        <li className="technologies-item">HTML</li>
                        <li className="technologies-item">Javascript</li>
                        <li className="technologies-item">CSS</li>
                    </ul>
                    <a href="https://github.com/cse110-sp23-group3/cse110-sp23-group3" className="projects-github" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                </li>
                <li>
                    <img src={flutterSafety} className="project-image" alt="Flutter safety project"></img>
                    <h3>Flutter Safety</h3>
                    <ul className="technologies-list">
                        <li className="technologies-item">Flutter</li>
                    </ul>
                    <a href="https://github.com/Renzo-Olivares/flutter_virus" className="projects-github" target="_blank" rel="noopener noreferrer"><FaGithub size={32}/></a>
                </li>
                <li>
                    <h3>Project 4</h3>
                    <ul className="technologies-list">
                        <li className="technologies-item">React</li>
                        <li className="technologies-item">Javascript</li>
                        <li className="technologies-item">CSS</li>
                        <li className="technologies-item">SQL</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}