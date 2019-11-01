import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchBusinesses } from "../actions/userBusiness.js"
import Businesses from '../components/businesses/Businesses.js'


class BusinessesContainer extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchBusinesses()
      }

    render() { 
        return ( 
            <div>
              <Businesses />
            </div>
         );
    }
}

const mapStateToProps = state => {
    // console.log("mapStateToProps products", state);
      return {
        businesses: state.businessReducer
      };    
}
 
export default connect(mapStateToProps, { fetchBusinesses })(BusinessesContainer);