import React from 'react'
import { Link } from "react-router-dom";
import musicConcert from "../assets/image/musicConcert.jpg";
import djNight from "../assets/image/djNight.jpg";
import standupComedy from "../assets/image/standupComedy.jpeg";
import dandiyaNight from "../assets/image/dandiyaNight.avif";
import rockConcert from "../assets/image/RockConcert.jpg"
import openMicnight from "../assets/image/openMicNight.jpg"

const informalEvents = [
  {
    id: 1,
    title: "Music Concert",
    image: musicConcert,
    eventName: "Harmony Arena",
    place:"Connaught Place, New Delhi",
    price: 40000,
    guests: 300,
  },
  {
    id: 2,
    title: "Dj Night",
    image: djNight ,
    eventName: "Neon Club Hall",
    place: "Saket, New Delhi",
    price: 35000,
    guests: 200,

  },
  {
    id: 3,
    title: "Dandiya Night",
    image:dandiyaNight,
    eventName: "Celebration Ground",
    place: "Noida Sector 62",
    price: 25000,
    guests: 120,
  },
  {
    id: 4,
    title: "Standup Comedy",
    image: standupComedy,
    eventName: "ComedyLaugh Lounge",
    place: "Hauz Khas, New Delhi",
    price: 40000,
    guests: 200,

  },
  {
    id: 5,
    title: "Rock Concert",
    image:rockConcert,
    eventName: "Live Beats Arena",
    place: "Saket, New Delhi",
    price: 40000,
    guests: 280,
  },
  {
    id: 6,
    title: "Open Mic Night",
    image:openMicnight,
    eventName: "Creative Stage Hall",
    place: "Greater Kailash, New Delhi",
    price: 50000,
    guests: 320,
  },
];

const Informal = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
    
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold !text-purple-800">
              Informal Events
            </h1>
    
            <p className="text-gray-600 text-center mt-3  mx-auto">
              Enjoy a variety of exciting informal events including music concerts, DJ nights, stand-up comedy,<br/> 
              and Dandiya nights. Experience live performances, energetic music, dancing, <br/>
              laughter, colorful lights, and festive entertainment. 
            </p>
          </div>
    
          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
            {informalEvents.map((event) => (
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
                    to={`/informaldetails/${event.id}`}
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