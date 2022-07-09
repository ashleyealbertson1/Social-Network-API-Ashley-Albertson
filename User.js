const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            min: 5,
            max: 15,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        // userId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        reactions: [reactionSchema],
    },

    { timestamp: true },

    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;