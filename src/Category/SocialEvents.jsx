import React from "react";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";



function SocialEvents() {
  const [socialevents, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/socialevents"
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
    <div className="min-h-screen bg-gray-100 py-6 px-4">

      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold !text-purple-800">
          Social Events
        </h1>

        <p className="text-gray-600 mt-2">
          Celebrate life's special moments with your loved ones. From birthdays and weddings to engagements<br /> and anniversaries, plan beautiful celebrations,bring your loved ones together<br />and create unforgettable memories that last a lifetime.
        </p>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {socialevents.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-xl shadow-lg text-center
            hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={event.eventPicture}
              alt={event.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-5">

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {event.title}
              </h2>


              <div className="text-gray-600 mb-2 text-left">

                <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                <strong className="text-black text-left">Place : </strong> {event.eventPlace}<br />
                <strong className="text-black">Price : </strong> {event.price}<br />
                <strong className="text-black">Guests : </strong> {event.guests}

              </div>



              <Link to={`/viewdetails/${event._id}`}
                className="bg-purple-600 text-white px-2 py-1 rounded-lg
              hover:bg-purple-700 transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default SocialEvents;