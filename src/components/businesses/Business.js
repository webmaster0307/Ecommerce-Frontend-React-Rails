import React from 'react';
import {connect} from 'react-redux'

const Business = (props) => {
    console.log("business", props)
    return (
        <div>
            Business Page
        </div>
    )
}

const mapStateToProps = state => {
      return {
        businesses: state.businessReducer
      };    
}

export default connect(mapStateToProps)(Business);