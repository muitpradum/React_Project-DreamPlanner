import React from 'react'
import Carousel from '../Component/Carousel'
import EventCategory from './EventCategory';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import axios from "axios";




function Home() {
  const [homeevents, setEvents] = useState([]);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/homeevents"
      );

      setEvents(response.data);

    } catch (error) {
      console.log(error);
      setError("Unable to load events");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center bg-[#FFFFE0]">
  //       <h2 className="text-2xl font-semibold">
  //         Loading Projects...
  //       </h2>
  //     </div>
  //   );

  // const events = [
  //   {

  //     "title": "Dandiya Celebration",
  //     "eventName": "Dream Celebration Arena",
  //     "eventPicture": "/images/dandiya-dance.jpg",
  //     "eventPlace": "Sector 62, Noida",
  //     "price": "399",
  //     "date": "October 16-18, 2026 "
  //   },
  //   {
  //     id: 2,
  //     "title": "Creative Arts Festival",
  //     "eventName": "Kiran Nadar Museum of Art",
  //     "eventPicture": "/images/artsFestival.jfif",
  //     "eventPlace": "Sunder Nursery, New Delhi",
  //     "price": "249",
  //     "date": "October 02, 2026"
  //   },
  //   {

  //     "title": "Diwali Rangoli",
  //     "eventName": "Gulshan One29 Mall Event",
  //     "eventPictue": "/images/diwalirangoli.jpg",
  //     "eventPlace": "Ghaziabad",
  //     "price": "349",
  //     "date": "November 6, 2026"

  //   },

  // ];
  return (
    <>
      <Carousel />
      <EventCategory />
      <div className="bg-gray-100 py-5">

        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming <span className='!text-purple-600'>Events</span>
        </h1>
        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}


        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6">

          {homeevents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
            >

              <img
                src={`http://localhost:5000${event.eventPicture}`}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h2>

                <div className="text-gray-600 mb-4 text-left">

                  <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                  <strong className="text-black text-left">Place : </strong> {event.eventPlace}<br />
                  <strong className="text-black">Entry Price : </strong>₹ {event.price}<br />
                  <strong className="text-black">Event Date :</strong> {new Date(event.date).toDateString()}<br />

                </div>

                <Link to={`/udetails/${event._id}`}
                  className="bg-purple-600 text-white px-5 py-2 mt-5 
                           rounded-lg hover:bg-purple-700"
                >
                  Event Details
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Home