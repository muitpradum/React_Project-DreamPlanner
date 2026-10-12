const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {

        EventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Viewdetail"
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },
        
        title: {
            type: String,
            required: true,
            enum: [
            "Wedding",
            "Birthday Party",
            "Anniversary",
            "Graduation Party",
            "Reunion Party",
            "Engagement",

            "Graduation Ceremony",
            "Coding Workshop",
            "Science Exhibition",
            "Quiz Competition",
            "Career Guidance",
            "Educational Seminar",

            "Music Concert",
            "DJ Night",
            "Stand-up Comedy",
            "Dandiya Night",
            "Rock Concert",
            "Open Mic Night",

            "Blood Donation Camp",
            "NGO Support",
            "Food Donation Drive",
            "Orphanage Visit",
            "Education Support",
            "Clothes Donation Drive",

            "Seminar",
            "Party",
            "Concert",
            "Other"
        ],
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

        price: {
            type: Number,
            required: true,
        },

        guests: {
            type: Number,
            required: true,
        },

        date: {
            type: Date,
            unique: true,
            required: true
        }
    }
);
const Bookings = mongoose.model("Booking", bookingSchema);

module.exports = Bookings;