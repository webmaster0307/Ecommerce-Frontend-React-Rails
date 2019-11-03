import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchBusinesses } from "../actions/userBusiness.js"
import Businesses from '../components/businesses/Businesses.js'
import NewBusiness from '../components/businesses/NewBusiness.js'

class BusinessesContainer extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchBusinesses()
      }

    render() { 
        return ( 
            <div>
              {/* <NewBusiness /> */}
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
 
export default connect(mapStateToProps, {fetchBusinesses})(BusinessesContainer);