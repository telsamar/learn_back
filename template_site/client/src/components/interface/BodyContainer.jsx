import { connect } from 'react-redux'

import { API_getText, 
         API_insertText, } from 'path_services/api';


function BodyContainer (props) {

    const handlerClick = () => {
        API_getText()
    }

    return (
        <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            {/* Вывести кликабельный список id messages */}
            {/* Данные загружаются при запуске клиента */}
            {/* Если сервер не загружен, то надпись о его недоступности и кнопка Загрузить */}
            {/* При клике на id в отдельном компонента отображается текст сообщения */}
            {/* Сделать кнопки добавления удаления редактирования сообщений */}

            <button
                className='btn btn-success'
                onClick={handlerClick}
            >
                Получить текст
            </button>
            

            <button
                className='btn btn-success'
                onClick={() => {API_insertText('tratata')}}
            >
                Отправить текст
            </button>
            


            <h1>{props.mytext}</h1>    
        </div>
    );
}

//props
const mapStateToProps = (state) => {
    return {
        mytext: state.allData.mytext,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {
        // setFoo: (foo) => dispatch(act_setFoo(foo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer); 