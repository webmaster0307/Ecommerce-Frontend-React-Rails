import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBusiness } from '../../actions/userBusiness'
import { Redirect } from 'react-router-dom'

class Businesses extends Component {
    constructor(props){
        super(props);


    console.log("business props", this.props);
    }

    handleDelete = (businessId) => {
        // console.log("businessId", businessId)
        this.props.deleteBusiness(businessId);
    }



    render() { 
        const { loggedIn } = this.props;
        if (!loggedIn) return <Redirect to='/' />

        // console.log(this.props.currentUserBusinesses.businesses.businesses)
        let currentUserBusinesses = this.props ? this.props.currentUserBusinesses.businesses.businesses.map(business =>
           <div key={business.attributes.id}>
                <Link to={`/businesses/${business.attributes.id}`}>
                    <li className="business-name"><b className="titlespacing">Business Name:</b> {business.attributes.name}</li>       
                </Link>
    
                <li className="business-id"><b className="titlespacing">Business Tax ID:</b>  {business.attributes.tax_id}</li>
                <li className="business-id"><b className="titlespacing">Created on:</b>  {new Date(`${business.attributes.created_at}`).toLocaleString().split(',')[0]}</li>
                <Link to={`/businesses/${business.attributes.id}/edit`} className="edit-link">Edit Business</Link>
                <br></br>
                <p className="red"> Warning: Deleting a business will also delete associated products</p>
                <button onClick={() => this.handleDelete(`${business.attributes.id}`)} className="button">Delete Business</button>
                <br></br>
                <br></br>
                <br></br>
            </div> 
            ) 
            : null

            
        return (
            <div className="businesses">
                <div className="wrapper">
                    { currentUserBusinesses }
                    <p className="business-para">Create a new business? <Link to="/businesses/new">Click here</Link></p>
                </div>
            </div>
        )
    
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

 

export default connect(mapStateToProps, { deleteBusiness })(Businesses);