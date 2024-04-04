import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
    API_getMessages,
} from 'path_services/api';

function Info (props) {
    useEffect(() => {
        API_getMessages();
    }, []);
    
    const handlerClick = (id) => {
        console.log(`Message with ID ${id} was clicked.`);
        //  логика для отображения деталей сообщения
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

                // {/* +++ Вывести кликабельный список id messages */}
                // {/* +++ Данные загружаются при запуске клиента */}

                // {/* +++ Если сервер не загружен, то надпись о его недоступности и кнопка Загрузить */}

                // {/* (?) При клике на id в отдельном компонента отображается текст сообщения */}
                
                // {/* (-) Сделать кнопки добавления удаления редактирования сообщений */}
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


export default connect(mapStateToProps, mapDispatchToProps)(Info); 