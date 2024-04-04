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


                // {/* +++ Вывести кликабельный список id messages */}
                // {/* +++ Данные загружаются при запуске клиента */}

                // {/* +++ Если сервер не загружен, то надпись о его недоступности и кнопка Загрузить */}

                // {/* (?) При клике на id в отдельном компонента отображается текст сообщения */}
                
                // {/* (-) Сделать кнопки добавления удаления редактирования сообщений */}

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