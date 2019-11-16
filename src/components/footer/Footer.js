import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <li><NavLink to="/About" className="my-nav-links">About</NavLink></li>
                <li><NavLink to="/Shipping" className="my-nav-links">Shipping</NavLink></li>
                <li><NavLink to="/Policies" className="my-nav-links">Policies</NavLink></li>
            </div>
            <p>&copy2019 All Rights Reserved. Proudly created by Nicole DAgnenica.</p>
        </footer>
    )
}

export default Footer