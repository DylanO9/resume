import resume from '../assets/Resume.pdf';
import { FaDownload } from 'react-icons/fa';
import ariatCard from '../assets/ariat-card.png';
import '../styles/resume.css';

export default function Resume () {
    return (
        <section id="resume">
            <ul id="work-experience-list">
                <li className="work-experience-item">
                    <h3>Ariat</h3>
                    <h4>Ecommerce It Intern</h4>
                    <p>June 2024 - September 2024</p>
                    <ul>
                        <li>Collaborated with the Business Analyst team to gather, document, and discuss requirements, ensuring alignment of engineering and business needs, and to streamline the development cycles for projects including adding support for athlete vouchers, UK e-gift cards, and post-purchase upsell features.</li>
                        <li>Worked on developing post-purchase upsell functionality using ISML, JavaScript, and XHTML to increase average order value.</li>
                        <li>Conducted manual QA testing for Apple Pay integration on iOS devices to ensure a seamless payment workflow.</li>
                    </ul>
                </li>
                <li className="work-experience-item">
                    <h3>Venture Shares</h3>
                    <h4>Developer Intern</h4>
                    <p>November 2023 - March 2024</p>
                    <ul>
                        <li>Built and optimized filtering, sorting, and pagination features with a focus on responsive and accessible design to streamline navigation.</li>
                        <li>Developed a watchlist feature that allows users to monitortheir portfolio,
                        linking profiles to stored data</li>
                    </ul>
                </li>
            </ul>
            <a id="resume-download" download="Dylan_Olivares_Resume.pdf" href={resume} alt="Dylan Olivares Resume"><FaDownload size={64}/><span>Download CV</span></a>
        </section>
    );
}