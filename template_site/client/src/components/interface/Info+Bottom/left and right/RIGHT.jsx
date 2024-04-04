import React from 'react';
import { connect } from 'react-redux';

import { 

} from 'path_services/api';

function RIGHT(props) {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
                <p>Нажмите на любую кнопку...</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn btn-primary">Кнопка 1</button>
                <button className="btn btn-primary">Кнопка 2</button>
                <button className="btn btn-primary">Кнопка 3</button>
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(RIGHT); 