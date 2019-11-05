import React from 'react';

const BusinessProduct = (props) => {
    console.log("business product" ,props)
    return (
        <div>
            Business Product
            <h2>Link to Edit Product</h2>
            <button>Delete Product</button>
        </div>
    )
}

export default BusinessProduct;