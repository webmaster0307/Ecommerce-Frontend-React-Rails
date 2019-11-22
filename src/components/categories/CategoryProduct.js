import React, { Component } from 'react';
import { connect } from 'react-redux'

class CategoryProduct extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
          votes: 0
         }

        //  console.log("product", this.props)
    }

   handleProductUpVote = (productId) => {
       console.log(productId)
        this.setState ({
            votes: this.state.votes +1
        })
       
   }

    render() { 

    let product = this.props.products.products.filter(product => product.attributes.id === this.props.id)[0]
    console.log("product is", product)

    let productColors = product ? product.attributes.colors.map(color => 
        <div key={color.color_id}>
            <li className="product-text">{color.color_name}</li> 
        </div>
    ) : null
        

    return(
        <div className="">
            <div className="product-main">
                <div className="product-flex">
                    <div className="product col-5">
                        <li className="product-image">{<img src={ this.props.image } alt="product" ></img>}</li>
                    </div>
                </div>

                <div className="product-info col-7">
                    <li className="product-text"> <b className="titlespacing">Product Name:</b> { this.props.name }</li>
                    <li className="product-text"><b className="titlespacing">Description:</b> {this.props.description}</li>
                    <li className="product-text"><b className="titlespacing">Item Number:</b> {this.props.item_number}</li>

                    <br></br>
                    <li className="product-text"><b className="titlespacing">Colors:</b> </li>
                    { productColors } 
                    
                    <br></br>
                    <li className="product-text"><b className="titlespacing" >Price:</b> ${this.props.price}</li>

                    <button onClick={() => this.handleProductUpVote(`${this.props.id}`)} className="button">Vote</button>

    
                    <li className="products-price"> Votes: { this.state.votes }</li>


                </div>     
            </div>
        </div>
    )

    }
}
 
const mapStateToProps = state => {
    return {
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps)(CategoryProduct);


