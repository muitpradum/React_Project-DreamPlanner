import React from 'react'
import dandiya from "../assets/image/dandiya-dance.jpg"
import artsFestival from "../assets/image/artsFestival.jfif"
import diwalirangoli from "../assets/image/diwalirangoli.jpg"
import { useParams, Link } from 'react-router-dom'


const events = [
    {
        id: 1,
        eventCategory: "Dandiya Celebration",
        eventName: "Dream Celebration Arena",
        eventDetail: "A beautiful and spacious venue designed for weddings, birthdays, anniversaries, engagements, parties, and special celebrations. It offers a comfortable atmosphere, elegant decorations, modern facilities, and ample space to create unforgettable memories with family and friends.",
        eventPicture: dandiya,
        place: "Sector 62, Noida",
        city: "Noida",
        price: "399",
        eventDate: "October 16-18, 2026 "

    },
    {
        id: 2,
        eventCategory: "Creative Arts Festival",
        eventName: "Kiran Nadar Museum of Art",
        eventDetail: "A vibrant cultural venue where visitors can explore contemporary and modern Indian art through exhibitions, workshops, talks, and special events. It provides an inspiring space for art lovers, educational programs, cultural gatherings, and creative celebrations.",
        eventPicture: artsFestival,
        place: "Sunder Nursery, New Delhi",
        price: "249",
        eventDate: "October 02, 2026"
    },
    {
        id: 3,
        eventCategory: "Diwali Rangoli",
        eventName: "Gulshan One29 Mall Event",
        eventDetail: "A lively event destination offering a modern space for exhibitions, product launches, cultural programs, shopping events, entertainment activities, and community celebrations. It provides a vibrant atmosphere for visitors and organizers to enjoy memorable events.",
        eventPicture: diwalirangoli,
        place: "Ghaziabad",
        price: "349",
        eventDate: "November 6, 2026"
    }

]

const Udetails = () => {
    const { id } = useParams();

    const event = events.find((item) => item.id === Number(id));

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-red-500">
                    Event not found
                </h2>
            </div>
        );
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-10">

                {/* Heading */}
                {/* <h1 className="text-3xl text-center font-bold mb-8">
                {/* Event : { id } */}
                {/* <span className="text-purple-600">
                  Details
                </span> */}
                {/* </h1> *} */}

                {/* Main Card */}
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

                    <div className="md:flex">

                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src={event.eventPicture}
                                alt={event.eventName}
                                className="w-full h-full min-h-[380px] object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="md:w-2/3 p-6">

                            <h2 className="text-3xl font-bold !text-purple-600">
                                {event.eventCategory}
                            </h2>

                            <h3 className="text-2xl text-black text-left mt-2">
                                {event.eventName}
                            </h3>

                            {/* <p className="text-gray-500 mt-1">
                      Event Code: {event.eventCode}
                    </p> */}

                            <p className="mt-5 text-black leading-7 text-left">
                                {event.eventDetail}
                            </p>

                            {/* Event Information */}
                            <div className="mt-6 space-y-4 text-black text-left">

                                <p>
                                    <b>Place:</b> {event.place}
                                </p>

                                <p>
                                    <b>City:</b> {event.city}
                                </p>

                                <p>
                                    <b>Price:</b> ₹{event.price}
                                </p>

                                <p>
                                    <b>Guests:</b> {event.noGuests}
                                </p>

                                <p>
                                    <b>Date:</b>{" "}
                                    {new Date(event.eventDate).toLocaleDateString()}
                                </p>

                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex gap-4">

                                <Link
                                    to={`/booking/${event.id}`}
                                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                                >
                                    Book Now
                                </Link>

                                {/* <button
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
                      >
                        Request Pricing
                      </button> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Udetails