import React, { Component } from 'react';

class NewBusiness extends Component {
    constructor(props){
        super(props);

        this.state = { 
            name: "",
            tax_id: "",
         }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {

    }
    
    render() { 
        return ( 

            <div>
                <h1>Register Business</h1>
                <p>Please fill in this form to register a buiness.</p>

                <form onSubmit={this.handleSubmit}>
                    <label for="name">Username:  </label>
                    <input type="text" name="name" placeholder="Enter Business name" onChange={this.handleChange} required/>
          
                    <label for="tax_id">Tax Id:  </label>
                    <input type="text" name="tax_id" placeholder="Enter Tax Id" onChange={this.handleChange} required/>

                    <input type="submit" value="Submit"></input>

                </form>
            </div>
            
         );
    }
}
 
export default NewBusiness;