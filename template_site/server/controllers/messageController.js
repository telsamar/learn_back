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


// insertMessage


// updateMessage


// deleteMessage


// getMessageForId


exports.cntr_message = async function(req, res) {
    const action = req.body.action;
    switch (action) {
        // case 'get': {
        //     return getText(res)
        // }
        
        // case 'insert':
        //     return insertMessage(req, res);
        // case 'update':
        //     return updateMessage(req, res);
        // case 'delete':
        //     return deleteMessage(req, res);
        // case 'getMessageForId':
        //     return getMessageForId(req, res);

        default:
            return res.status(400).json({ error: 'action not found' });
    }
};
