import React from 'react';
import { Link, NavLink} from 'react-router-dom'

const Businesses = () => {
    return (
        <div>
            <h2>Business 1</h2>
            <h2>Business 2</h2>
            <p>Create a new business? <Link to="/business/new">New Business</Link></p>
        </div>
    )
}

export default Businesses;