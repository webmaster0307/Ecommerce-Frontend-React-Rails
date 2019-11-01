import React from 'react';
import { Link } from 'react-router-dom'

const Businesses = (props) => {

    console.log("business", props);

    return (
        <div>
            <h2>Business 1</h2>
            <h2>Business 2</h2>
            <p>Create a new business? <Link to="/business/new">New Business</Link></p>
        </div>
    )
}

export default Businesses;