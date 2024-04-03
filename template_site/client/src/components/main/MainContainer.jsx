import { connect } from 'react-redux'
import React from "react";

import BodyContainer from 'path_components/interface/BodyContainer';

function MainContainer (props) {

    return (
        <div className="d-flex flex-row vw-100 vh-100 justify-content-center align-items-center">
            <BodyContainer />
        
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
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer); 