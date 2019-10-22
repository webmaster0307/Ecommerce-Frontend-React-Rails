import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getCategories } from "../actions/category.js"
import Categories from '../components/Categories.js'

class CategoryContainer extends Component {
    state = {  }

    componentDidMount() {
        this.props.getCategories()
      }
 
    render() { 
        const { category } = this.props;
        console.log(category)
        return ( 
            <div>
                <Categories category={category} />
            </div> 
        );
    }
}
 

const mapStateToProps = ({category}) => {
    return {
      category
    }
  }

  
export default connect(mapStateToProps, {getCategories})(CategoryContainer);