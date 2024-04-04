let arrMessages = [
    {id:1, message: 'message 1'},
    {id:2, message: 'message 2'},
    {id:3, message: 'message 3'},
    {id:4, message: 'message 4'},
    {id:5, message: 'message 5'},
    {id:6, message: 'message 6'},
    {id:7, message: 'message 7'},
    {id:8, message: 'message 8'},
    {id:9, message: 'message 9'},
];

// getMessages
const getMessages = async (req, res) => {
    res.status(200).json(arrMessages);
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
    res.status(201).json(newMessage);
};


// updateMessage
const updateMessage = async (req, res) => {
    const { id, message } = req.body;
    const messageIndex = arrMessages.findIndex(msg => msg.id === id);
    if (messageIndex > -1) {
        arrMessages[messageIndex].message = message;
        res.status(200).json(arrMessages[messageIndex]);
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
};


// deleteMessage
const deleteMessage = async (req, res) => {
    const { id } = req.body;
    const messageIndex = arrMessages.findIndex(msg => msg.id === id);
    if (messageIndex > -1) {
        arrMessages.splice(messageIndex, 1);
        res.status(200).json({ message: 'Сообщение удалено' });
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
};


// getMessageForId
const getMessageForId = async (req, res) => {
    const { id } = req.body;
    const message = arrMessages.find(msg => msg.id === parseInt(id));
    if (message) {
        res.status(200).json(message);
    } else {
        res.status(404).json({ error: 'Сообщение не найдено' });
    }
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