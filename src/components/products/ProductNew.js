import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProduct } from '../../actions/product'
import { Redirect } from 'react-router-dom'

class ProductNew extends Component {
    constructor(props){
        super(props);

        console.log(this.props);

        this.state = { 
            name: "",
            description: "",
            price: "",
            image: "",
            item_number: "",
            category: "",
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
        console.log(this.state)
        // this.props.createProduct(this.state);
        // this.props.history.push('/businesses');
            this.setState({
                name: "",
                tax_id: "",
            })
    }

    render() { 
        // let categories = this.props.categories ? this.props.categories.categories.map(category => <div>{category.attributes.name}</div>) : null

        // console.log(categories)

        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>New Product Form</h1>
        
                    <form onSubmit={this.handleSubmit}>

                    <div className="row"> 
                    <select onChange={this.handleChange}>
                        {this.props.categories.categories.map((category) => <option key={category.attributes.id} id={category.attributes.id} value={category.attributes.id}>{category.attributes.name}</option>) }
                    </select>
                    </div>
                  

                    <div className="row"> 
                        <div className="label">    
                            <label htmlFor="name">Product name:  </label>
                        </div>  
                            <input type="text" name="name" id="name" placeholder="Enter Product Name" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="description">Description:  </label>
                        </div>  
                            <input type="text" name="description" id="description" placeholder="description" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="price">Price:  </label>
                        </div>  
                            <input type="text" name="price" id="price" placeholder="price" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="image">Image:  </label>
                        </div>  
                            <input type="text" name="image" id="image" placeholder="image" onChange={this.handleChange} />
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
      categories: state.categoryReducer,
      currentUser: state.currentUser,
      loggedIn: !!state.currentUser
    }
  }

 
export default connect(mapStateToProps)(ProductNew);