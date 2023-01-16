import React from "react";
import sig from './signature_once.gif';
import linkedin from './linkedin_logo.png';
import './HeaderBar.css';

function HeaderBar(props){
    return (
        <div>
            <header className="HeaderBar">
                <img src={sig} className="Signature-gif" alt="signature" />
                <nav>
                    <a href="https://www.linkedin.com/in/joel-christensen-usu/"><img src={linkedin} className="LinkLogo" alt="LinkedIn Logo" /></a>
                </nav>
            </header>
        </div>
    );
}


export default HeaderBar;