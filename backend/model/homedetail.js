const mongoose = require('mongoose');

const homedetailSchema = new mongoose.Schema(
    {
        EventId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Homeevent"
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

        eventDate: {
            type: Date,
            unique: true,
            required: true,
        },
        
        eventPicture: {
            type: String,
            required: true
        }
    }
);
const Homedetails = mongoose.model("Homedetail", homedetailSchema);

module.exports = Homedetails;