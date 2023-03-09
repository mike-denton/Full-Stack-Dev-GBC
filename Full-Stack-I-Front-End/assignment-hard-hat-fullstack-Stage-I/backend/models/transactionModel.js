const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    amount: {
        type:String,
        required:true
    },
    status: {
        type: String,
        required: true
    },
    gasUsed: {
        type: String,
        required: false
    },
    receiptHash: {
        type: String,
        required: true
    }
}, { timestamps: true })


const Transaction = mongoose.model('Transaction', transactionSchema, 'txnHistory');

module.exports = Transaction;