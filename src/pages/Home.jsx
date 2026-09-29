import React from 'react'
import Carousel from '../Component/Carousel'
import EventCategory from './EventCategory';
import dandiya from "../assets/image/dandiya-dance.jpg"
import artsFestival from "../assets/image/artsFestival.jfif"
import diwalirangoli from "../assets/image/diwalirangoli.jpg"
import { Link } from 'react-router-dom';


function Home() {
  const events = [
    {
      id: 1,
      title: "Dandiya Celebration",
      eventName:"Dream Celebration Arena",
      image: dandiya,
      place:"Sector 62, Noida",
      price:"399",
      eventDate:"October 16-18, 2026 "
    },
    {
      id: 2,
      title: "Creative Arts Festival",
      eventName:"Kiran Nadar Museum of Art",
      image:artsFestival,
      place:"Sunder Nursery, New Delhi",
      price:"249",
      eventDate:"October 02, 2026"
    },
    {
      id: 3,
      title: "Diwali Rangoli",
      eventName:"Gulshan One29 Mall Event",
      image:diwalirangoli,
      place:"Ghaziabad",
      price:"349",
      eventDate:"November 6, 2026"

    },
    
  ];
  return (
    <>
      <Carousel />
      <EventCategory/>
      <div className="bg-gray-100 py-5">

        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming <span className='!text-purple-600'>Events</span>
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6">

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h2>

                <div className="text-gray-600 mb-4 text-left">
    
                    <strong className="text-black">Venue Name : </strong>{event.eventName}<br />
                    <strong className="text-black text-left">Place : </strong> {event.place}<br />
                    <strong className="text-black">Entry Price : </strong>₹ {event.price}<br />
                    <strong className="text-black">Event Date :</strong> {event.eventDate}<br/>
    
                  </div>

                <Link to={`/udetails/${event.id}`}
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