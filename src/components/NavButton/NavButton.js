import React from "react";
import './NavButton.css';

class NavButton extends React.Component{
    //props = name, href
    constructor(props){
        super(props);
        this.name = props.name;
        this.href = props.href;
    }

    render(){
        return (
            <button className="NavButton">
                <a href={this.href} alt={"Link to " + this.name}>
                    {this.name}
                </a>
            </button>
    
        );
    }
}

export default NavButton;