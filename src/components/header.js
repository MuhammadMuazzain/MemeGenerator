import React from "react";
import logo from '../images/Logo.png'

export default function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="Logo" className="title-img"></img>
            <p>React Course - Project 3</p>
        </div>
    )
}