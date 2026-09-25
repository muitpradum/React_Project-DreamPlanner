import React from "react";

import { Link } from "react-router-dom";

const socialEvents = [
  {
    id: 1,
    title: "Wedding",
    eventName: "Royal Wedding",
    image: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2022/03/image4-1080x565.jpg",
    place: "Rohini, New Delhi",
    price: 50000,
    guests: 500,
  },
  {
    id: 2,
    title: "Birthday Party",
    eventName: "Grand Harmony Hall",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDQqOzrbmSCVtn3M5B-rumLzFcZKVEE-UXEndO6RCuA&s=10",
    place: "Dwarka, New Delhi",
    price: 25000,
    guests: 150,
  },
  {
    id: 3,
    title: "Anniversary ",
    eventName: "Golden Crown Hall",
    image: "https://i.pinimg.com/736x/a7/50/b6/a750b6e2b9098091e7a5c3b51c74b344.jpg",
    place: "Noida-Sector 63, Delhi-NCR",
    price: 15000,
    guests: 50,
  },
  {
    id: 4,
    title: "Engagement",
    eventName: "Royal Wedding",
    image: "https://specialyou.in/cdn/shop/files/71jDtqryq6L.jpg?v=1755513828&width=2048",
    place: "Janakpuri, New Delhi",
    price: 25000,
    guests: 100,

  },
  {
    id: 5,
    title: "Graduation Party",
    eventName: "Golden Crown Hotel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0e_Zg3g8YXHvS0sv2-FGPVERlj-s-ulkT3hP9Mp4FK5ExaYBefbROHFDI&s=10",
    place: "India Gate, New Delhi",
    price: 25000,
    guests: 100,

  },
  {
    id: 6,
    title: "Reunion Party",
    eventName: "Royal Hotel",
    image: "https://i.pinimg.com/736x/02/a9/fa/02a9fabc149048ff137106c40aff4cda.jpg",
    place: "Pragati Maidan, New Delhi",
    price: 30000,
    guests: 80,
  },
];

function SocialEvents() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold !text-purple-800">
          Social Events
        </h1>

        <p className="text-gray-600 mt-2">
          Celebrate life's special moments with your loved ones. From birthdays and weddings to engagements<br /> and anniversaries, plan beautiful celebrations,bring your loved ones together<br />and create unforgettable memories that last a lifetime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {socialEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg text-center
            hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-5">

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {event.title}
              </h2>

              {/* Description */}
              {/* <div className="text-gray-600 mb-4">
                <p >
                  {event.description}
                  
                </p>
              </div>

              {event.eventName} */}
              <div className="text-gray-600 mb-2 text-left">

                <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                <strong className="text-black text-left">Place : </strong> {event.place}<br />
                <strong className="text-black">Price : </strong> {event.price}<br />
                <strong className="text-black">Guests : </strong> {event.guests}

              </div>



              <Link to={`/social/viewdetails/${event.id}`}
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