const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: [String],
        required: true,
        trim: true,
        limit: 5
    },
    totalPrice: {
        type: Number,
        required: true 
    },
    createdAt: { 
        type: String,
        default: new Date().toLocaleString()
    },
    updatedAt: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Cart', cartSchema) 