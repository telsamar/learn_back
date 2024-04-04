import React from 'react';
import { connect } from 'react-redux';

import Info from './Info';
import Bottom from './Bottom';

function BodyContainer (props) {
    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            
            < Info />           
                            
            < Bottom />

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