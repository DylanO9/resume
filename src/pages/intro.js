import '../styles/intro.css';
import headshot from '../assets/headshot.jpg';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import resume from '../assets/Resume.pdf';

export default function Intro() {
  return (
    <section id="intro">
        <img id="headshot" src={headshot} alt="Dylan Olivares"></img>
        <h1>Dylan Olivares</h1>
        <h2>Software Engineer</h2>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/dylan-olivares/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/DylanO9" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
            </li>
            <li>
                <a id="resume-download" download="Dylan_Olivares_Resume.pdf" href={resume} alt="Dylan Olivares Resume">
                    <FaFileAlt /> Resume
                </a>
            </li>
        </ul>
    </section>
  );
}