export const SET_TEXT = 'SET_TEXT';
export const SET_MESSAGES = 'SET_MESSAGES';

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
)