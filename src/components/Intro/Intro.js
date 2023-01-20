import React from "react";
import profile from './bookmark_profile_2.png';
import bgImg from './intro_background.png';
import './Intro.css';

function Intro(props){
    const style = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '180%',
    }

    return (
        <div className="IntroBox" style={style}>
            <p className="WelcomeText">some content</p>
            <img src={profile} className="ProfilePortrait" alt="Joel Christensen"></img>
        </div>
    );
}

export default Intro;