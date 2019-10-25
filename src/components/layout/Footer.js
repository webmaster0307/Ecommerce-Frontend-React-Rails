import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <li><NavLink to="/About" className="nav-links">About</NavLink></li>
        </footer>
    )
}

export default Footer