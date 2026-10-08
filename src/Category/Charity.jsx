import React from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function Charity() {
   const [charityevents, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/charityevents"
      );

      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Unable to load events");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#FFFFE0]">
        <h2 className="text-2xl font-semibold">
          Loading Projects...
        </h2>
      </div>
    );
  }
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
         {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}
      </div>

      {/* Events */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {charityevents.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Image */}
            <img
              src={`http://localhost:5000${event.eventPicture}`}
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
                <strong className="text-black text-left">Place : </strong> {event.eventPlace}<br />
                <strong className="text-black text-left">City : </strong> {event.eventCity}<br />
                <strong className="text-black">Guests : </strong> {event.guests}<br />
                <strong className="text-black">Date : </strong> {new Date(event.eventDate).toLocaleDateString("en-GB")}

              </div>



              {/* Button */}
              <Link to={`/charitydetails/${event._id}`}
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