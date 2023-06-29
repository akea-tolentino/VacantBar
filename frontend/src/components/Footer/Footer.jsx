import { BsGithub, BsLinkedin } from "react-icons/bs";
import './Footer.css';

export default function Footer () {

    return (
        <footer className="footer">
            <section className="links">
                <span>find me on:</span>
                <div className="github">
                    <a href="https://github.com/akea-tolentino/VacantBar.git">
                        <BsGithub />
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/jamesbradley-tolentino-813555229/">
                        <BsLinkedin />
                    </a>
                </div>
            </section>
        </footer>
    )
}