const mongoose = require('mongoose');

const socialeventSchema = new mongoose.Schema(
    {
       
        title: {
            type: String,
            required: true,
            trim: true,
        },

        eventName: {
            type: String,
            required: true,
            trim: true,
        },

        eventPlace: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
        },

        guests: {
            type: Number,
            required: true,
        },
        
        eventPicture: {
            type: String,
            required: true
        }
    }
);
const Socialevents = mongoose.model("Socialevent", socialeventSchema);

module.exports = Socialevents;