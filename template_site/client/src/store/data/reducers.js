import { 
    SET_TEXT, 
    SET_MESSAGES,
    SET_CURRENT_MESSAGE,
    INSERT_MESSAGE,
    UPDATE_MESSAGE,
    DELETE_MESSAGE
} from './actions'

const defaultState = {
    data: 
        {
        mytext: 'Текст из state. Приступил к изменению сайта',
        messages: [],
        current_id: -1,
        current_message: null,
        },
    interface:
        {

        }
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                data: {
                    ...state.data,
                    mytext: action.payload
                }
            };
        case SET_MESSAGES:
            return {
                ...state,
                data: {
                    ...state.data,
                    messages: action.payload
                }
            };
        case SET_CURRENT_MESSAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    current_id: action.payload.id,
                    current_message: action.payload.message,
                }
            };
        case INSERT_MESSAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    messages: [...state.data.messages, action.payload],
                }
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    messages: state.data.messages.map(msg =>
                        msg.id === action.payload.id ? { ...msg, message: action.payload.message } : msg
                    ),
                    current_message: state.data.messages.find(msg => msg.id === action.payload.id)
                            ? action.payload.message
                            : state.data.current_message
                }
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    messages: state.data.messages.filter(msg => msg.id !== action.payload.id),
                    current_message: null,
                }
            };
        default:
            return state;
    }
};
