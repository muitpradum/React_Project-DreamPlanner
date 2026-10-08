const mongoose = require('mongoose');

const informaldetailSchema = new mongoose.Schema(
    {
        EventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Informalevent"
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
const Informaldetails = mongoose.model("Informaldetail", informaldetailSchema);

module.exports = Informaldetails;