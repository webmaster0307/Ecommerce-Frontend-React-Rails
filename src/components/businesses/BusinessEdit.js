import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editBusiness } from '../../actions/userBusiness'
import { Redirect } from 'react-router-dom'

class BusinessEdit extends Component {
    constructor(props){
        super(props);

        // console.log("edit form" , this.props)

        this.state = { 
            name: `${this.props.business ? this.props.business.attributes.name : ""}` ,
            tax_id:`${this.props.business ? this.props.business.attributes.tax_id : ""}`,
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
        let business = {...this.state, id: this.props.business.id }
        // console.log("state is" , business)
        this.props.editBusiness(business);
        
        this.props.history.push('/businesses');
            this.setState({
                name: "",
                tax_id: "",
            })
    }

    render() { 

        // let currentBusiness = this.props.businesses.businesses.filter(business => business.id === this.props.match.params.id)[0]
        // console.log(currentBusiness.attributes.tax_id)

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
                            <input type="name" name="name" id="name" value={this.state.name}  onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="tax_id">Tax Id:  </label>
                        </div>  
                            <input type="tax_id" name="tax_id" id="tax_id" value={this.state.tax_id} onChange={this.handleChange} required/>
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


 
export default connect(null, { editBusiness })(BusinessEdit);