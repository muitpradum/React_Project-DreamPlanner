const mongoose = require('mongoose');

const charityeventSchema = new mongoose.Schema(
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

        eventCity: {
            type: String,
            required: true,
            trim: true,
        },

        guests: {
            type: Number,
            required: true,
        },
        
        eventPicture: {
            type: String,
            required: true
        },
        eventDate:{
            type: Date,
            required: true
        }
    }
);
const Charityevents = mongoose.model("Charityevent", charityeventSchema);

module.exports = Charityevents;