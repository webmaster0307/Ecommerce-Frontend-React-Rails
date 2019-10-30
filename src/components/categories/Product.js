import React from 'react';
import { connect } from 'react-redux'

const Product = (props) => {

    console.log("product props", props);

    return(
        <div>
            product page
        </div>
    )

}

const mapStateToProps = state => {
    return {
      products: state.productReducer,
    };    
}

export default connect(mapStateToProps)(Product);