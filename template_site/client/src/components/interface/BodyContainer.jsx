import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { 
    API_getText, 
    API_insertText, 
    API_getMessages,
} from 'path_services/api';


function BodyContainer (props) {
    useEffect(() => {
        API_getMessages();
    }, []);
    

    const handlerClick1 = () => {
        API_getText()
    }

    const handlerClick2 = () => {
        API_insertText('По клику вызвана функция API_insertText')
    }

    const handlerClick3 = (id) => {
        console.log(`Message with ID ${id} was clicked.`);
        //  логика для отображения деталей сообщения
    }

    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <div>
                {(!props.messages || props.messages.length === 0) ? (
                    <div style={{ textAlign: 'center' }}>
                        <p>Сервер недоступен</p>
                        <button onClick={API_getMessages} style={{ margin: '0 auto' }}>Загрузить</button>
                    </div>
                ) : (
                    props.messages.map(msg => (
                        <button 
                            key={msg.id} 
                            onClick={() => handlerClick3(msg.id)} 
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




                {/* +++ Вывести кликабельный список id messages */}
                {/* +++ Данные загружаются при запуске клиента */}

                {/* +++ Если сервер не загружен, то надпись о его недоступности и кнопка Загрузить */}

                {/* (?) При клике на id в отдельном компонента отображается текст сообщения */}
                
                {/* (-) Сделать кнопки добавления удаления редактирования сообщений */}
            
            

            <div className="fixed-bottom mb-2">
                <div className="d-flex justify-content-around">
                    <button
                        className='btn btn-success'
                        onClick={handlerClick1}
                    >
                        Получить текст
                    </button>

                    <button
                        className='btn btn-success'
                        onClick={handlerClick2}
                    >
                        Отправить текст
                    </button>
                </div>
                
                <h1 className="text-center">{props.mytext}</h1>  
            </div>
                  
        </div>
    );
}

//props
const mapStateToProps = (state) => {
    return {
        mytext: state.allData.mytext,
        messages: state.allData.messages,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer); 