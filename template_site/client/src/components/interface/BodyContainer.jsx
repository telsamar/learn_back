import React from 'react';
import { connect } from 'react-redux';

import Info from './Info+Bottom/Info';
import Bottom from './Info+Bottom/Bottom';

function BodyContainer(props) {
    return (
        <div className="body-container d-flex flex-column justify-content-center align-items-center vh-100 overflow-auto">
            <Info />
            {/* <Bottom /> */}
        </div>
    );
}
                // {/* +++ Вывести кликабельный список id messages */}
                // {/* +++ Данные загружаются при запуске клиента */}

                // {/* +++ Если сервер не загружен, то надпись о его недоступности и кнопка Загрузить */}

                // {/* (+++) При клике на id в отдельном компонента отображается текст сообщения */}
                
                // {/* (+++) Сделать кнопки добавления удаления редактирования сообщений */}

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