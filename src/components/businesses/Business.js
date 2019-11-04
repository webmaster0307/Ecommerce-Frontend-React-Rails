import React from 'react';
import {connect} from 'react-redux'

const Business = (props) => {
    console.log("business", props)

    // const BusinessId = props.match ? props.match.params.id[0] : null
    // console.log("BusinessId", BusinessId)

    // let currentBusiness = props.businesses.businesses ? props.businesses.businesses.filter(business => business.id === props.match.params.id)[0] : null
    // console.log("currentBusiness", currentBusiness)

    let currentBusiness = props.businesses.businesses.filter(business => business.id === props.match.params.id)[0]
    console.log("currentBusiness", currentBusiness)
    
    // handleOnClick() {
    //     this.props.deleteRestaurant(this.props.restaurant.id);
    //   }

    return (
        <div>
            {/* NEED TO REDIRECT IF NOT CURRENT BUSINESS */}
            <li>{currentBusiness ? currentBusiness.attributes.name : null}
            {/* <button onClick={() => this.handleOnClick()}> X </button> */}
            </li>
            
        </div>
    )
}

const mapStateToProps = state => {
      return {
        businesses: state.businessReducer
      };    
}

export default connect(mapStateToProps)(Business);