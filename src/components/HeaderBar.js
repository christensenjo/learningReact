import React from "react";
import sig from './signature_once.gif';
import linkedin from './linkedin_logo.png';
import github from './github_logo.png';
import './HeaderBar.css';

function HeaderBar(props){
    return (
        <div>
            <header className="HeaderBar">
                <img src={sig} className="Signature-gif" alt="signature" />
                <nav className="Nav-pages">
                    <a href="https://learningreact-cc1a4.web.app/" className="Nav-link" alt="Link to home">Home</a>
                </nav>
                <nav className="Nav-socials">
                <a href="https://github.com/christensenjo"><img src={github} className="LinkLogo" alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/joel-christensen-usu/"><img src={linkedin} className="LinkLogo" alt="LinkedIn Logo" /></a>
                </nav>
            </header>
        </div>
    );
}


export default HeaderBar;