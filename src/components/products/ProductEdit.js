import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../../actions/product'
import { Redirect } from 'react-router-dom'

class ProductEdit extends Component {
    constructor(props){
        super(props);

        console.log("product edit", this.props);

        this.state = { 
            name: `${this.props.product ? this.props.product.attributes.name : ""}` ,
            description: `${this.props.product ? this.props.product.attributes.description : ""}` ,
            price: `${this.props.product ? this.props.product.attributes.price : ""}` ,
            image: `${this.props.product ? this.props.product.attributes.image : ""}` ,
            category_id: `${this.props.product ? this.props.product.attributes.category.name : ""}` ,
            subcategory_id: `${this.props.product ? this.props.product.attributes.subcategory.name : ""}` ,
         }

    }

    handleChange =(e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        // console.log(this.state)
        let product_id = this.props.product.id
        let business_id = this.props.product.relationships.business.data.id
        let item_number = this.props.product.attributes.item_number
        // console.log("business_id", business_id)
        let product = {...this.state, product_id, business_id, item_number}
        console.log("product", product)
        this.props.editProduct(product);
        this.props.history.push(`/businesses/${business_id}/products/${product_id}`)
    }

    render() { 
        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />

        return ( 
            <div className="container-form">
                <div className="middle-container">
                    <h1>Edit Product Form</h1>
        
                    <form onSubmit={this.handleSubmit}>

                    <div className="row"> 
                    <div className="label">   
                        <label htmlFor="name">Category: Required  </label>
                                value={this.state.category_id}
                            <select onChange={(e) => this.setState({category_id: e.target.value})}>>
                            <option>Select an option.</option>
                                {this.props.categories.categories.map((category) => <option key={category.id} id={category.id} value={category.id} >{category.attributes.name}</option>) }
                            </select>
                        </div>
                    </div>

                    <div className="row"> 
                    <div className="label">   
                        <label htmlFor="name">SubCategory:  Required  </label>
                                value={this.state.subcategory_id}
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
                            <input type="text" name="name" id="name" value={this.state.name} placeholder="Enter Product Name" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="description">Description:  </label>
                        </div>  
                            <input type="text" name="description" id="description" value={this.state.description} placeholder="description" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="price">Price: Don't enter $ symbol  </label>
                        </div>  
                            <input type="text" name="price" id="price" value={this.state.price} placeholder="price" onChange={this.handleChange} required/>
                    </div>

                    <div className="row"> 
                        <div className="label">  
                            <label htmlFor="image">Image:  </label>
                        </div>  
                            <input type="text" name="image" id="image" value={this.state.image} placeholder="image" onChange={this.handleChange} required/>
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
 
export default connect(mapStateToProps, { editProduct })(ProductEdit);