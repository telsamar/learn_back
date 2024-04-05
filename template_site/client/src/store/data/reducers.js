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
            return {
                ...state,
                mytext: action.payload
            };
        case SET_MESSAGES:
            // console.log('Данные в SET_MESSAGES:', action.payload);
            return {
                ...state,
                messages: action.payload
            };
        case SET_CURRENT_MESSAGE:
            const { payload: message } = action;
            return {
                ...state,
                current_id: message.id,
                current_message: message.message,
            };
        case INSERT_MESSAGE:
            console.log('Данные в SET_MESSAGES:', action.payload);
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case UPDATE_MESSAGE:
            const updatedMessages = state.messages.map(msg =>
                msg.id === action.payload.id ? { ...msg, message: action.payload.message } : msg
            );
            return {
                ...state,
                messages: updatedMessages,
            };
        case DELETE_MESSAGE:
            // console.log('Данные в DELETE_MESSAGE:', action.payload);
            return {
                ...state,
                messages: state.messages.filter(msg => msg.id !== action.payload.id),
            };

        default: return state
    }
}