import React from "react";
import logo from '../Images/physics.png'

function Navbar(){
    return(
        <div className="nav">
            <div className="nav-left">
                <img src={logo}></img>
                <h3>ReactFacts</h3>
            </div>
            <div className="nav-right">
                <h4>React course - Project 1</h4>
            </div>
        </div>
    )
}

export default Navbar