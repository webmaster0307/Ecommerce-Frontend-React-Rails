import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProduct } from '../../actions/product'
import { Redirect } from 'react-router-dom'
import cuid from 'cuid';

class ProductNew extends Component {
    constructor(props){
        super(props);

        this.state = { 
            name: "",
            description: "",
            price: "",
            image: "",
            category_id: "",
            subcategory_id: "",
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
        let business_id = this.props.match.params.id
        let item_number =  cuid()
        let product = {...this.state, business_id, item_number }
        
        // console.log(item_number)
        // console.log("product", product)
        this.props.createProduct(product);
        this.props.history.push(`/businesses/${business_id}`);
            this.setState({
                name: "",
                description: "",
                price: "",
                image: "",
                item_number: "",
                category_id: "",
                subcategory_id: "",
            })
    }

    render() { 
        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>New Product Form</h1>
        
                    <form onSubmit={this.handleSubmit}>

                    <div className="row"> 
                    <div className="label">   
                        <label htmlFor="name">Category: Required  </label>
                            <select onChange={(e) => this.setState({category_id: e.target.value})}>>
                            <option>Select an option.</option>
                                {this.props.categories.categories.map((category) => <option key={category.id} id={category.id} value={category.id} >{category.attributes.name}</option>) }
                            </select>
                        </div>
                    </div>

                    <div className="row"> 
                    <div className="label">   
                        <label htmlFor="name">SubCategory:  Required  </label>
                            <select onChange={(e) => this.setState({subcategory_id: e.target.value})} >>
                            <option>Select an option.</option>
                                {this.props.subcategories.subcategories.map((subcategory) => <option key={subcategory.id} id={subcategory.id} value={subcategory.id} >{subcategory.attributes.name}</option>) }
                            </select > 
                        </div>
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
                            <label htmlFor="price">Price: Don't enter $ symbol  </label>
                        </div>  
                            <input type="text" name="price" id="price" placeholder="price" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="image">Image:  </label>
                        </div>  
                            <input type="text" name="image" id="image" placeholder="image" onChange={this.handleChange} required/>
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
      subcategories: state.subcategoryReducer,
      loggedIn: !!state.currentUser
    }
  }

 
export default connect(mapStateToProps, { createProduct })(ProductNew);