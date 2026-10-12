const mongoose = require('mongoose');

const homeeventSchema = new mongoose.Schema(
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

        date: {
            type: Date,
            required: true,
        },
        
        eventPicture: {
            type: String,
            required: true
        }
    }
);
const Homeevents = mongoose.model("Homeevent", homeeventSchema);

module.exports = Homeevents;