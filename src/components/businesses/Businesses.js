import React from 'react';
import { Link } from 'react-router-dom'

const Businesses = (props) => {

    console.log("business", props);


    console.log(props.currentUserBusinesses.businesses.businesses)

    let currentUserBusinesses = props ? props.currentUserBusinesses.businesses.businesses.map(business =>
       <div key={business.attributes.id}>
            <Link to={`/businesses/${business.attributes.id}`}>
                <li className="business-name">Business Name: {business.attributes.name}</li>
            </Link>
            <li className="business-id">Business Tax ID:  {business.attributes.tax_id}</li>
            <br></br>
        </div> 
        ) : null

    return (
        <div className="businesses">
            <div className="wrapper">
                { currentUserBusinesses }
                <br></br>
                <p className="business-para">Create a new business? <Link to="/business/new">Click here</Link></p>
            </div>
        </div>
    )
}

export default Businesses;