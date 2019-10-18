import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <li><NavLink to="/About" className="nav-links">About</NavLink></li>
        </div>
    )
}

export default Footer