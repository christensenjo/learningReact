import React from "react";
import { useMeasure } from "react-use";
import profile from './bookmark_profile_3.png';
import title from './typewriter_logo.gif';
import bgImg from './intro_background.png';
import './Intro.css';

function Intro(props){
    // const [ref, {x, y, width, height, top, right, bottom, left}] = useMeasure();
    // const introStyle = {
    //     backgroundImage: `url(${bgImg})`,
    //     backgroundSize: '100% 40%',
    //     backgroundRepeat: 'no-repeat',
    //     // backgroundSize: 'contain',
    // };

    // let imgStyle = {
    //     height: `${(width * 0.4) + 'px'}`,
    //     width: `${(height * 0.41) + 'px'}`,
    // };
    // TODO: add ref={ref} to div IntroBox

    return (
        <div className="IntroBox">
            <p className="WelcomeText">Welcome to Joelbc Design</p>           
            <img src={profile} className="ProfilePortrait" alt="Joel Christensen"></img>
            <div className="RightSpace"></div>
        </div>
    );
}

export default Intro;