const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        
        reactionText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 4,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;