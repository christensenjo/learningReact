import React from "react";
import { useMeasure } from "react-use";
import profile from './bookmark_profile_2.png';
import bgImg from './intro_background.png';
import './Intro.css';

function Intro(props){
    const [ref, {x, y, width, height, top, right, bottom, left}] = useMeasure();
    const introStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '100% 40%',
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
    };

    let imgStyle = {
        height: `${(width * 0.4) + 'px'}`,
        width: `${(height * 0.41) + 'px'}`,
    };
    console.log(imgStyle);

    return (
        <div className="IntroBox" ref={ref}>
            <p className="WelcomeText">some content</p>
            {/* <img src={profile} style={imgStyle} alt="Joel Christensen"></img> */}
            <img src={profile} className="ProfilePortrait" alt="Joel Christensen"></img>
            <div className="RightSpace"></div>
        </div>
    );
}

export default Intro;