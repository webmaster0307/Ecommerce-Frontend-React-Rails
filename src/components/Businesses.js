import React from 'react';
import { Link } from 'react-router-dom'
import BusinessesContainer from '../containers/BusinessesContainer'

const Businesses = () => {
    return (
        <div>
            <BusinessesContainer />
            <h2>Business 1</h2>
            <h2>Business 2</h2>
            <p>Create a new business? <Link to="/business/new">New Business</Link></p>
        </div>
    )
}

export default Businesses;