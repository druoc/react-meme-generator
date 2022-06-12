import React from "react";
import trollIcon from '../components/img/troll-face-icon.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={trollIcon} className="navbar--icon"/>
            <span className="navbar--span">Meme Generator</span>
        </nav>
    );
};

export default Navbar;