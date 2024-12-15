import '../styles/awards.css';
import ucsd from '../assets/ucsd-icon.png';
import nsf from '../assets/nsf-icon.png';
import scvf from '../assets/scvf-icon.jpg';

export default function Awards () {
    return (
        <section id="awards">
            <ul id="awards-list">
                <li className="award-item">
                    <img src={ucsd} alt="UCSD Logo" /> 
                    <h3>Regent's Scholarship</h3>
                    <p>2022-2024</p>
                </li>
                <li className="award-item">
                    <img src={scvf} alt="NSF Logo" />
                    <h3>Latinos in Technology Scholarship</h3>
                    <p>2022-2024</p>
                </li>
                <li className="award-item">
                    <img src={nsf} alt="SCVF Logo" />
                    <h3>S-STEM Scholarship</h3>
                    <p>2020-2022</p>
                </li>
            </ul>
        </section>
    );
}