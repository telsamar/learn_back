import store from 'path_store/store'
import {
    act_setText,
    act_setMessages
 } from 'path_store/data/actions';

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors', 
};
    

export const commonAPI = (api, action, body = {}, dispatcher = null, api_request = null, successData = false) => {
    fetch(`http://localhost:3030/api/${api}`, {
        ...options,
        body: JSON.stringify({ action, ...body })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Получены данные от сервера (отработка api.js)', data);
        if (dispatcher) {
            const dispatchData = successData ? data.success : data;
            store.dispatch(dispatcher(dispatchData));
        }
        if (api_request) {
            api_request();
        }
    })
    .catch(error => console.error('API error:', error));
}


export const API_getText = () => {
    commonAPI('text', 'get', {}, act_setText, null, true);
}

export const API_insertText = (text) => {
    commonAPI('text', 'insert', { text }, null, API_getText, true);
}

export const API_getMessages = () => {
    commonAPI('message', 'getMessages', {}, act_setMessages);
}


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




// export const API_insertText = (text) => {
//     fetch('http://localhost:3030/api/text', 
//         {
//             ...options,
//             body: JSON.stringify({ 
//                 action: 'insert',
//                 text: text
//             })
//         }
//     )
//     .then(response => response.json())
//     .then(data => {
//         console.log('get data from server')
//         console.log(data)
//         API_getText()
//     })
//     .catch(error => console.error(error));
// }