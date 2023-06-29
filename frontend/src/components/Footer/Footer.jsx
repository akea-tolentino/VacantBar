import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer () {

    return (
        <footer>
            <span>join me on:</span>
            <div className="github">
                <BsGithub />
            </div>
            <div className="linkedin">
                <BsLinkedin />
            </div>
        </footer>
    )
}