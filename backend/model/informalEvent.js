const mongoose = require('mongoose');

const informaleventSchema = new mongoose.Schema(
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
const Informalevents = mongoose.model("Informalevent", informaleventSchema);

module.exports = Informalevents;