import React from 'react';
import BusinessesContainer from '../../containers/BusinessesContainer';

const BusinessHome = () => {
    return (
        <div className="businesses">
            <h2>Current Business</h2>
            <BusinessesContainer />
        </div>
    )


}

export default BusinessHome;