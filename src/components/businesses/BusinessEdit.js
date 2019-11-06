import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBusiness } from '../../actions/userBusiness'
import { Redirect } from 'react-router-dom'

class BusinessEdit extends Component {
    constructor(props){
        super(props);

        console.log(this.props)


        this.state = { 
            name: "",
            tax_id: "",
         }
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.editBusiness(this.state);
        // this.props.history.push('/businesses');
            // this.setState({
            //     name: "",
            //     tax_id: "",
            // })
    }

    render() { 

        let currentBusiness = this.props.businesses.businesses.filter(business => business.id === this.props.match.params.id)[0]
        console.log("currentBusiness" , currentBusiness)


        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>Register Business</h1>
                    <p>Please fill in this form to register a buiness.</p>

                    <form onSubmit={this.handleSubmit}>
                    <div className="row"> 
                        <div className="label">    
                            <label htmlFor="name">Business name:  </label>
                        </div>  
                            <input type="name" name="name" id="name" value={currentBusiness ? currentBusiness.attributes.name :null} placeholder="Enter Business Name" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="tax_id">Tax Id:  </label>
                        </div>  
                            <input type="tax_id" name="tax_id" id="tax_id" value={currentBusiness ? currentBusiness.attributes.tax_id :null} placeholder="Tax Id" onChange={this.handleChange} required/>
                    </div>

                    <div className="row">
                         <input type="submit" value="Submit"></input>
                    </div>
                    </form>
                    
                </div>
            </div>

         );
    }
}

const mapStateToProps = state => {
    return {
      businesses: state.businessReducer
    };    
}
 
export default connect(mapStateToProps, { editBusiness })(BusinessEdit);