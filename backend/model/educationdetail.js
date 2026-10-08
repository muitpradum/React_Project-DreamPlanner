const mongoose = require('mongoose');

const educationdetailSchema = new mongoose.Schema(
    {
        EventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Educationevent"
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

        place: {
            type: String,
            required: true,
            trim: true,
        },

        city: {
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
        //  eventDate:{
        //     type: Date,
        //     required: true
        // }

        
    }
);
const Educationdetails = mongoose.model("Educationdetail", educationdetailSchema);

module.exports = Educationdetails;