import { io } from 'socket.io-client'

const serverSockets = {
    _id: '',
    _socket: null,

    get id () {
       return this._id
    },
    
    set id (value) {
       this._id = value
    },

    connecting (serverName) {
        this._socket = io( serverName, { 'force new connection': true, })      

        // this._socket.on('connection', () => this.connection())

        this._socket.on("connect", () => this.connect());

        this._socket.on("reconnect", (attempt) => this.reconnect(attempt));

        this._socket.on("connect_error", (error) => this.connect_error(error));

        this._socket.on("message", (data) => this.message(data));

    },
    
    // connection () {
    //     console.log('Connect to socket server')
    //     console.log(this._socket.id)
    //     this._id = this._socket.id
    // },

    connect () {
        console.log('connect to socket server with id = '+this._socket.id) 
        this._id = this._socket.id
    },

    reconnect () {
        console.log('...try reconnect to socket server. Attempt ', attempt) 
    },

    connect_error (error) {
        console.log('connection to socket error')
        console.log(error)
        setTimeout(() => this._socket.connect(), 5000)
    },

    message (data) {
        console.log('get update message with data:');
        console.log(data);              //TODO:        add action with new task
    },

}

export default serverSockets;







