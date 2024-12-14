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
                        <li>Collaborated with Business Systems Analysts to gather and document requirements for projects including athlete vouchers, UK e-gift cards, and post-purchase upsell features.</li>
                        <li>Implemented post-purchase upsell functionality, integrating requirements and resolving technical challenges in Salesforce Commerce Cloud.</li>
                        <li>Conducted manual QA testing for Apple Pay integration on iOS devices, ensuring seamless payment workflows</li>
                    </ul>
                </li>
                <li className="work-experience-item">
                    <h3>Venture Shares</h3>
                    <h4>Developer Intern</h4>
                    <p>November 2023 - March 2024</p>
                    <ul>
                        <li>Utilized Next and Tailwind CSS to create responsive and visually appealing front-end components, ensuring compatibility across various devices</li>
                        <li>Implemented user authentication and authorization using Auth0, enhancing security and providing seamless access control.</li>
                        <li>Developed a watchlist feature allowing users to monitor their portfolio, linking profiles to stored data and providing real-time updates.</li>
                    </ul>
                </li>
            </ul>
            <a id="resume-download" download="Dylan_Olivares_Resume.pdf" href={resume} alt="Dylan Olivares Resume"><FaDownload size={64}/><span>Download CV</span></a>
        </section>
    );
}