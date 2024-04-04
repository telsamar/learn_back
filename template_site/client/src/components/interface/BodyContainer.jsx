import React from 'react';
import { connect } from 'react-redux';

import Info from './Info+Bottom/Info';
import Bottom from './Info+Bottom/Bottom';

function BodyContainer(props) {
    return (
        <div className="body-container d-flex flex-column justify-content-center align-items-center vh-100 overflow-auto">
            <Info />
            <Bottom />
        </div>
    );
}

//props
const mapStateToProps = (state) => {
    return {

    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer); 