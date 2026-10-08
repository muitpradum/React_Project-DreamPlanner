const mongoose = require('mongoose');

const eventdetailSchema = new mongoose.Schema(
    {
        EventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
        },

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

        eventDetail: {
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
        },

        
    }
);
const Eventdetails = mongoose.model("Eventdetail", eventdetailSchema);

module.exports = Eventdetails;