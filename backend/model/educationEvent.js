const mongoose = require('mongoose');

const educationeventSchema = new mongoose.Schema(
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
const Educationevents = mongoose.model("Educationevent", educationeventSchema);

module.exports = Educationevents;