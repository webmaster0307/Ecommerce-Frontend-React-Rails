import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchSubcategories } from "../actions/subcategory.js"




class SubcategoryContainer extends Component {
    state = {  }
    render() { 
        return ( <div></div>  );
    }
}
 
export default connect(null)(SubcategoryContainer);