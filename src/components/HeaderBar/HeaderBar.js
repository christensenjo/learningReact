import React from "react";
import logo from './JBC_logo.png';
import linkedin from './linkedin_logo.png';
import github from './github_logo.png';
import twitter from './twitter_logo.png';
import insta from './instagram_logo.png';
import './HeaderBar.css';
import NavButton from '../NavButton/NavButton.js';

function HeaderBar(props){
    return (
        <div>
            <header className="HeaderBar">
                <img src={logo} className="Signature-gif" alt="Logo" />
                <nav className="Nav-pages">
                    {/* add NavButton components here */}
                    <NavButton name="Home" href="https://learningreact-cc1a4.web.app/" />
                    <NavButton name="Resume" href="https://learningreact-cc1a4.web.app/" />
                </nav>
                <nav className="Nav-socials">
                    <a href="https://www.instagram.com/joelbc__/"><img src={insta} className="SocialLogo" alt="Instagram Logo" /></a>
                    <a href="https://twitter.com/dataSaysJoel"><img src={twitter} className="SocialLogo" alt="Twitter Logo" /></a>
                    <a href="https://github.com/christensenjo"><img src={github} className="SocialLogo" alt="Github Logo" /></a>
                    <a href="https://www.linkedin.com/in/joel-christensen-usu/"><img src={linkedin} className="SocialLogo" alt="LinkedIn Logo" /></a>
                </nav>
            </header>
        </div>
    );
}


export default HeaderBar;