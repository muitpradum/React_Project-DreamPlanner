const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
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
const Events = mongoose.model("Event", eventSchema);

module.exports = Events;