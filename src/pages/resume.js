import resume from '../assets/Resume.pdf';
import { FaFileAlt } from 'react-icons/fa';
import '../styles/resume.css';

export default function Resume () {
    return (
        <section id="resume">
            <h1>Work</h1>
            <ul id="work-experience-list">
                <li className="work-experience-item">
                    <h3>Ecommerce It Intern</h3>
                    <h4>Ariat</h4>
                    <p>June 2024 - September 2024</p>
                    <ul>
                        <li>Collaborated with Business Systems Analysts to gather and document requirements for projects including athlete vouchers, UK e-gift cards, and post-purchase upsell features.</li>
                        <li>Implemented post-purchase upsell functionality, integrating requirements and resolving technical challenges in Salesforce Commerce Cloud.</li>
                        <li>Conducted manual QA testing for Apple Pay integration on iOS devices, ensuring seamless payment workflows</li>
                    </ul>
                </li>
                <li className="work-experience-item">
                    <h3>Developer Intern</h3>
                    <h4>Venture Shares</h4>
                    <p>November 2023 - March 2024</p>
                    <ul>
                        <li>Utilized Next and Tailwind CSS to create responsive and visually appealing front-end components, ensuring compatibility across various devices</li>
                        <li>Implemented user authentication and authorization using Auth0, enhancingsecurity and providing seamless access control.</li>
                        <li>Developed a watchlist feature allowing users to monitortheir portfolio, linking profiles to stored data and providing real-time updates.</li>
                    </ul>
                </li>
            </ul>

            <a id="resume-download" download="Dylan_Olivares_Resume.pdf" href={resume} alt="Dylan Olivares Resume"><FaFileAlt /></a>
        </section>
    );
}