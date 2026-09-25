import React from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ngo from "../assets/image/ngo.jfif";
import bloodDonation from "../assets/image/bloodDonation.jfif";
import foodDonation from "../assets/image/foodDonation.jfif";
import orphanage from "../assets/image/orphanage.jpg";
import education from "../assets/image/education.jfif";
import clothesDonation from "../assets/image/clothesDonation.png"
const charityEvents = [
  {
    id: 1,
    title: "NGO Support",
    eventName: "Narayan Seva Sansthan",
    image: ngo,
    place: "Rohini, New Delhi",
    city: "New Delhi",
    guests: 300,
    eventDate: "2026-11-10",
  },
  {
    id: 2,
    title: "Blood Donation Camp",
    image: bloodDonation,
    eventName:"AIIMS Blood Bank",
    place: "Ansari Nagar, New Delhi",
    city: "New Delhi",
    guests: 100,
    eventDate: "2026-11-15",
  },
  {
    id: 3,
    title: "Food Donation Drive",
    eventName:"Annamrita Foundation",
    image: foodDonation,
    place: "Saket,New Delhi",
    city: "New Delhi",
    guests: 200,
    eventDate: "2026-11-20",

  },
  {
    id: 4,
    title: "Orphanage Visit",
    image: orphanage,
    eventName:"Udayan Care",
    place: "Lajpat Nagar, New Delhi",
    city: "New Delhi",
    guests: 150,
    eventDate: "2026-11-25",

  },
  {
    id: 5,
    title: "Education Support",
    image: education,
    eventName:"Teach For India",
    place: "Noida Sector 63",
    city: "Delhi-NCR",
    guests: 100,
    eventDate: "2026-12-01",

  },
  {
    id: 6,
    title: "Clothes Donation Drive",
    image: clothesDonation,
    eventName:"Asha Bhawan",
    place: "Lajpat Nagar, New Delhi",
    city: "New Delhi",
    guests: 100,
    eventDate: "2026-12-05",

  }
];

function Charity() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold !text-purple-600">
          Charity Events
        </h1>

        <p className="text-gray-600 mt-3">
          Join our charity events and make a positive difference in people's lives.<br />
          Your time, support, and kindness can make a real difference.
        </p>
      </div>

      {/* Events */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {charityEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {event.title}
              </h2>
              <div className="text-gray-600 mb-2 text-left">
                <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                <strong className="text-black text-left">Place : </strong> {event.place}<br />
                <strong className="text-black text-left">City : </strong> {event.city}<br />
                <strong className="text-black">Guests : </strong> {event.guests}<br />
                <strong className="text-black">Date : </strong> {event.eventDate}

              </div>



              {/* Button */}
              <Link to={`/charitydetails/${event.id}`}
                className="inline-block bg-purple-600 text-white
              px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Join Event
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charity;