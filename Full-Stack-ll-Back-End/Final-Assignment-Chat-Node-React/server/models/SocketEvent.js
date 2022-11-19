const mongoose = require("mongoose");
const socketEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        require: true
    },
    eventDescription: {
        type: String,
        require: true
    },
    eventDateTime: {
        type: String,
        require: true
    },
    eventOwner: {
        type: String,
        require: true
    },
    socketId: {
        type: String,
        default: true
    }
});
const SocketEvent = mongoose.model('SocketEvent', socketEventSchema, 'SocketEvents');
module.exports = SocketEvent;