import React from 'react';
import { connect } from 'react-redux';

import LEFT from './left and right/LEFT';
import RIGHT from './left and right/RIGHT';

function Info(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LEFT />
            <RIGHT />
        </div>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(Info); 