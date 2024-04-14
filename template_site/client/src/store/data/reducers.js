import { 
    SET_TEXT, 
    SET_MESSAGES,
    SET_CURRENT_MESSAGE,
    INSERT_MESSAGE,
    UPDATE_MESSAGE,
    DELETE_MESSAGE
} from './actions'

const defaultState = {
    mytext: 'Текст из state. Приступил к изменению сайта',
    messages: [],
    current_id: -1,
    current_message: null,
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TEXT:
            // console.log(action)
            return {
                ...state,
                mytext: action.payload
            };
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case SET_CURRENT_MESSAGE:
            return {
                ...state,
                current_id: action.payload.id,
                current_message: action.payload.message,
            };
        case INSERT_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.map(msg =>
                    msg.id === action.payload.id ? { ...msg, message: action.payload.message } : msg
                ),
                current_message: state.messages.find(msg => msg.id === action.payload.id)
                        ? action.payload.message
                        : state.current_message
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(msg => msg.id !== action.payload.id),
                current_message: null,
            };

        default: return state
    }
}