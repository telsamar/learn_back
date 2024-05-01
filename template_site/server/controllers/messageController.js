const db = require('../services/db');

let arrMessages = [
    {id:1, message: 'message 1'},
    {id:2, message: 'message 22'},
    {id:3, message: 'message 333'},
    {id:4, message: 'message 4444'},
    {id:5, message: 'message 55555'},
    {id:6, message: 'message 666666'},
    {id:7, message: 'message 7777777'},
    {id:8, message: 'message 88888888'},
    {id:9, message: 'message 999999999'},
];

// getMessages
// const getMessages = async (req, res) => {
//     res.status(200).json({ success: arrMessages });
//     console.log('Успешно отработано getMessages')
// };

const getMessages = async (req, res) => {
    try {
        const messages = await db.getMessages();
        res.status(200).json({ success: messages });
        console.log('Успешно отработано getMessages через базу данных')
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
        console.log('Ошибка при получении сообщений через базу данных', error);
    }
};

// insertMessage
const insertMessage = async (req, res) => {
    const { message } = req.body;
    const newId = arrMessages.length > 0 ? arrMessages[arrMessages.length - 1].id + 1 : 1;
    const newMessage = {
        id: newId,
        message: message,
    };
    arrMessages.push(newMessage);
    res.status(201).json({ success: newMessage });
    console.log('Успешно отработано insertMessage')
};

// updateMessage
const updateMessage = async (req, res) => {
    const { id, message } = req.body;
    const messageIndex = arrMessages.findIndex(msg => msg.id === id);
    if (messageIndex > -1) {
        arrMessages[messageIndex].message = message;
        res.status(200).json({ success: arrMessages[messageIndex] });
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
    console.log('Успешно отработано updateMessage')
};

// deleteMessage
const deleteMessage = async (req, res) => {
    const { id } = req.body; 
    const messageIndex = arrMessages.findIndex(msg => msg.id === id);
    if (messageIndex > -1) {
        arrMessages.splice(messageIndex, 1);
        res.status(200).json({ success: { message: 'Сообщение удалено', id } });
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
    console.log('Успешно отработано deleteMessage')
};

// getMessageForId
const getMessageForId = async (req, res) => {
    const { id } = req.body;
    const message = arrMessages.find(msg => msg.id === id);
    if (message) {
        res.status(200).json({ success: message });
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
    console.log('Успешно отработано getMessageForId')
};

exports.cntr_message = async function(req, res) {
    const action = req.body.action;
    switch (action) {
        case 'getMessages':
            return getMessages(req, res);
        case 'insertMessage':
            return insertMessage(req, res);
        case 'updateMessage':
            return updateMessage(req, res);
        case 'deleteMessage':
            return deleteMessage(req, res);
        case 'getMessageForId':
            return getMessageForId(req, res);
        default:
            return res.status(400).json({ error: 'action not found' });
    }
};