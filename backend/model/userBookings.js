const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        phone: {
            type: Number,
            required: true,
        },

        eventName: {
            type: String,
            required: true,
            trim: true,
        },
        
        price:{
            type: Number,
            required: true,
        },

        guests: {
            type: Number,
            required: true,
        },

         date: {
            type: Date,
            required: true
        }
    }
);
const Bookings = mongoose.model("Booking",bookingSchema);

module.exports = Bookings;