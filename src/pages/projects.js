import React, { useState } from 'react';
import '../styles/projects.css';
import cryptotracker from '../assets/crypto-tracker.png';
import flutterSafety from '../assets/flutter-safety.jpg';
import palmReading from '../assets/palm-reading.jpg';
import iphone1 from '../assets/iphone_1.png';
import iphone2 from '../assets/iphone_2.png';
import iphone3 from '../assets/iphone_3.png';
import iphone4 from '../assets/iphone_4.png';
import iphone5 from '../assets/iphone_5.png';
import iphone6 from '../assets/iphone_6.png';
import iphone7 from '../assets/iphone_7.png';

import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(''); // Track slide direction for animation

    const projects = [
        {
            title: "Fitness Network",
            technologies: ["Flutter"],
            images: [iphone1, iphone6, iphone7, iphone2, iphone3, iphone5],
            githubLink: "https://github.com/DylanO9/fitness_network.git"
        },
        {
            imgSrc: cryptotracker,
            imgAlt: "Crypto tracker project",
            title: "Crypto Tracker",
            technologies: ["React", "Javascript", "CSS", "Firebase"],
            githubLink: "https://github.com/DylanO9/Crypto-Tracker"
        },
        {
            imgSrc: palmReading,
            imgAlt: "Palm Reading Project",
            title: "Palm Reading",
            technologies: ["HTML", "Javascript", "CSS"],
            githubLink: "https://github.com/cse110-sp23-group3/cse110-sp23-group3",
            liveLink: "https://cse110-sp23-group3.github.io/cse110-sp23-group3/source/"
        },
        {
            imgSrc: flutterSafety,
            imgAlt: "Flutter safety project",
            title: "Flutter Safety",
            technologies: ["Flutter"],
            githubLink: "https://github.com/Renzo-Olivares/flutter_virus"
        }
    ];

    const handleNextImage = (images) => {
        setSlideDirection('slide-left'); // Set slide direction
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Immediately switch image
    };

    const handlePreviousImage = (images) => {
        setSlideDirection('slide-right'); // Set slide direction
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Immediately switch image
    };

    return (
        <section id="projects">
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        {project.images && (
                            <div className="image-slider">
                                <button className="arrow-button left" onClick={() => handlePreviousImage(project.images)}>
                                    <FaArrowLeft size={24} />
                                </button>
                                <div className="slider-image-container">
                                    <img
                                        src={project.images[currentImageIndex]}
                                        className={`slider-image ${slideDirection}`}
                                        alt={`Fitness Network Screenshot ${currentImageIndex + 1}`}
                                        onAnimationEnd={() => setSlideDirection('')} // Reset slide direction after animation
                                    />
                                </div>
                                <button className="arrow-button right" onClick={() => handleNextImage(project.images)}>
                                    <FaArrowRight size={24} />
                                </button>
                            </div>
                        )}
                        {project.imgSrc && <img src={project.imgSrc} className="project-image" alt={project.imgAlt}></img>}
                        <h3>{project.title}</h3>
                        <ul className="technologies-list">
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="technologies-item">{tech}</li>
                            ))}
                        </ul>
                        <ul className="project-links">
                            {project.githubLink && <a href={project.githubLink} className="projects-github" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>}
                            {project.liveLink && <a href={project.liveLink} className="projects-live" target="_blank" rel="noopener noreferrer"><span className="live-button">Live</span></a>}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}