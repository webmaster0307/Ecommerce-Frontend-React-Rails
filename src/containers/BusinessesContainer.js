import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchBusinesses } from "../actions/userBusiness.js"
import Businesses from '../components/businesses/Businesses.js'
import { fetchColors } from "../actions/color.js"

class BusinessesContainer extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchBusinesses()
        // this.props.fetchColors()
      }

    render() { 
        return ( 
            <div className="business-home"> 
              <h1>Seller Account Section</h1>
              <h2>Current Businesses</h2>
              <br></br>
              <Businesses currentUserBusinesses = {this.props} />
            </div>
         );
    }
}

const mapStateToProps = state => {
      return {
        businesses: state.businessReducer
      };    
}
 
export default connect(mapStateToProps, { fetchBusinesses, fetchColors })(BusinessesContainer);