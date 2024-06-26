import store from 'path_store/store'
import {
    act_setText,
    act_setMessages,
    act_setMessageById,
    act_insertMessage,
    act_updateMessage,
    act_deleteMessage
 } from 'path_store/data/actions';

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors', 
};
    

export const commonAPI = (api, action, body = {}, dispatcher = null, api_request = null) => {
    fetch(`http://localhost:3030/api/${api}`, {
        ...options,
        body: JSON.stringify({ action, ...body })
    })
    .then(response => response.json())
    .then(data => {
        // console.log('data:', data)
        // console.log('data.success:', data.success)
        if (dispatcher) {
            store.dispatch(dispatcher(data.success));
        }
        if (api_request) {
            api_request();
        }
    })
    .catch(error => console.error('API error:', error));
}

export const API_getText = () => {
    commonAPI('text', 'get', {}, act_setText, null);
}

export const API_insertText = (text) => {
    commonAPI('text', 'insert', { text }, null, API_getText);
}

export const API_getMessages = () => {
    commonAPI('message', 'getMessages', {}, act_setMessages);
}

export const API_getMessageForId = (id) => {
    commonAPI('message', 'getMessageForId', { id }, act_setMessageById);
}

export const API_insertMessage = (message) => {
    commonAPI('message', 'insertMessage', { message }, act_insertMessage);
}

export const API_updateMessage = (id, message) => {
    commonAPI('message', 'updateMessage', { id, message }, act_updateMessage);
}

export const API_deleteMessage = (id) => {
    commonAPI('message', 'deleteMessage', { id }, act_deleteMessage);
};




// export const API_getText = () => {
//     fetch('http://localhost:3030/api/text', 
//         {
//             ...options,
//             body: JSON.stringify({ 
//                 action: 'get'
//             })
//         }
//     )
//     .then(response => response.json())
//     .then(data => {
//         console.log('get data from server')
//         console.log(data)
//         store.dispatch(act_setText(data.success)); 
//     })
//     .catch(error => console.error(error));
// }
