import React from 'react';
import { connect } from 'react-redux';

import { 
    API_getText, 
    API_insertText, 
} from 'path_services/api';

function Bottom (props) {
    const handlerClick1 = () => {
        API_getText()
    }

    const handlerClick2 = () => {
        API_insertText('По клику вызвана функция API_insertText')
    }
    return (
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
    )

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

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Bottom); 