import React from 'react'
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

const Informal = () => {
  const [informalevents, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/informalevents"
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
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold !text-purple-800">
          Informal Events
        </h1>

        <p className="text-gray-600 text-center mt-3  mx-auto">
          Enjoy a variety of exciting informal events including music concerts, DJ nights, stand-up comedy,<br />
          and Dandiya nights. Experience live performances, energetic music, dancing, <br />
          laughter, colorful lights, and festive entertainment.
        </p>
         {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {informalevents.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-xl shadow-lg text-center
                overflow-hidden hover:shadow-2xl hover:-translate-y-2
                transition duration-300 pb-5"
          >

            {/* Image */}
            <img
              src={event.eventPicture}
              alt={event.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {event.title}
              </h2>

              {/* Description */}
              <div className="text-gray-600 mb-2 text-left">

                <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                <strong className="text-black text-left">Place : </strong> {event.eventPlace}<br />
                <strong className="text-black">Price : </strong> {event.price}<br />
                <strong className="text-black">Guests : </strong> {event.guests}

              </div>

              {/* View Details */}
              <Link
                to={`/informaldetails/${event._id}`}
                className="inline-block bg-purple-600 text-white
                  px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                View Details
              </Link>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Informal