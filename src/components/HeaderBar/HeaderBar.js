import React from "react";
import logo from './JBC_logo.png';
// import sig from './signature_once.gif';
import linkedin from './linkedin_logo.png';
import github from './github_logo.png';
import './HeaderBar.css';
import NavButton from '../NavButton/NavButton.js';

function HeaderBar(props){
    return (
        <div>
            <header className="HeaderBar">
                <img src={logo} className="Signature-gif" alt="Logo" />
                {/* <img src={sig} className="Signature-gif" alt="signature" /> */}
                <nav className="Nav-pages">
                    {/* add NavButton components here */}
                    <NavButton name="Home" href="https://learningreact-cc1a4.web.app/" />
                </nav>
                <nav className="Nav-socials">
                    <a href="https://github.com/christensenjo"><img src={github} className="SocialLogo" alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/joel-christensen-usu/"><img src={linkedin} className="SocialLogo" alt="LinkedIn Logo" /></a>
                </nav>
            </header>
        </div>
    );
}


export default HeaderBar;