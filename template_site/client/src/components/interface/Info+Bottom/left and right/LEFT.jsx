import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
    API_getMessages,
} from 'path_services/api';

function LEFT (props) {
    useEffect(() => {
        API_getMessages();
    }, []);
    
    const handlerClick = (id) => {
        console.log(`Message with ID ${id} was clicked.`);
    }
    
    return (
        <div>
                {(!props.messages || props.messages.length === 0) ? (
                    <div style={{ textAlign: 'center' }}>
                        <p>Сервер недоступен</p>
                        <button onClick={API_getMessages} className='btn btn-success' style={{ margin: '0 auto' }}>Загрузить</button>
                    </div>
                ) : (
                    props.messages.map(msg => (
                        <button 
                            key={msg.id} 
                            onClick={() => handlerClick(msg.id)} 
                            style={{ 
                                cursor: 'pointer', 
                                padding: '10px', 
                                border: '1px solid black', 
                                marginBottom: '5px', 
                                borderRadius: '5px', 
                                backgroundColor: 'white', 
                                display: 'block', 
                                width: '100%', 
                                textAlign: 'left' 
                            }}
                        >
                            {msg.id}
                        </button>
                    ))
                )}
        </div>
    )

}

//props
const mapStateToProps = (state) => {
    return {
        messages: state.allData.messages,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LEFT); 