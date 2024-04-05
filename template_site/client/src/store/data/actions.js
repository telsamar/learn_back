export const SET_TEXT = 'SET_TEXT';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CURRENT_MESSAGE = 'SET_CURRENT_MESSAGE';

export const INSERT_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';


export const act_setText = (result) => (
    {
        type: SET_TEXT,
        payload: result
    }
);

export const act_setMessages = (messages) => (
    {   
        type: SET_MESSAGES,
        payload: messages
    }
);

export const act_setMessageById = (message) => (
    {
    type: SET_CURRENT_MESSAGE,
    payload: message
    }
);

export const act_insertMessage = (message) => ({
    type: INSERT_MESSAGE,
    payload: message,
});

export const act_updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    payload: message,
});

export const act_deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: id,
});
