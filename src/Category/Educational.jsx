import React from "react";
import { Link } from "react-router-dom";

const educationalEvents = [
  {
    id: 1,
    title: "Graduation Ceremony",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20241023/pngtree-the-celebration-of-graduation-day-image_16440334.jpg",
    eventName: "Royal Hotel",
    place: "Rohini, New Delhi",
    price: 40000,
    guests: 200,
  },
  {
    id: 2,
    title: "Coding Workshop",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    eventName: "Tech Innovation Hall",
    place: "Connaught Place, New Delhi",
    price: 30000,
    guests: 200,

  },
  {
    id: 3,
    title: "Science Exhibition",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    eventName: "Future Science Hall",
    place: "Noida Sector 62",
    price: 25000,
    guests: 150,
  },
  {
    id: 4,
    title: "Quiz Competition",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    eventName: "FutureTech Hall",
    place: "Dwarka, New Delhi",
    price: 4500,
    guests: 90,

  },
  {
    id: 5,
    title: "Career Guidance",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    eventName: "Digital Learning Center",
    place: "Saket, New Delhi",
    price: 4000,
    guests: 80,
  },
  {
    id: 6,
    title: "Educational Seminar",
    image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    eventName: "Digital Learning Center",
    place: "Saket, New Delhi",
    price: 10000,
    guests: 120,
  },
];

function Educational() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold !text-purple-800">
          Educational Events
        </h1>

        <p className="text-gray-600 text-center mt-3  mx-auto">
          Discover meaningful educational events that inspire learning, develop new skills,<br /> and create opportunities for students to grow
          and succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {educationalEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg text-center
            overflow-hidden hover:shadow-2xl hover:-translate-y-2
            transition duration-300 pb-5"
          >

            {/* Image */}
            <img
              src={event.image}
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
                <strong className="text-black text-left">Place : </strong> {event.place}<br />
                <strong className="text-black">Price : </strong> {event.price}<br />
                <strong className="text-black">Guests : </strong> {event.guests}

              </div>

              {/* View Details */}
              <Link
                to={`/edetails/${event.id}`}
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
  );
}

export default Educational;