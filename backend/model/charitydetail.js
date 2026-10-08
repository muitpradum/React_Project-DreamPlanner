const mongoose = require('mongoose');

const charitydetailSchema = new mongoose.Schema(
    {
        EventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Charityevent"
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
const Charitydetails = mongoose.model("Charitydetail", charitydetailSchema);

module.exports = Charitydetails;