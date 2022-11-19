const mongoose = require("mongoose");
const chatHistorySchema = new mongoose.Schema({
    chatUsername: {
        type: String,
        require: true
    },
    chatMessage: {
        type: String,
        require: true
    },
    chatRoom: {
        type: String,
        require: true
    },
    chatDateTime: {
        type: String,
        require: true
    },
    socketId: {
        type: String,
        default: true
    }
});
const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema, 'ChatHistories');
module.exports = ChatHistory;