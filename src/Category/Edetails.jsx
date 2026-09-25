import React from 'react'
import { Link, useParams } from "react-router-dom";
const education = [
    {
        id: 1,
        eventCategory: "Graduation Ceremony",
        eventName: "Royal Hotel",
        // eventCode: "WED001",
        eventDetail: "A Royal Hotel is a grand and elegant celebration featuring luxurious decorations, beautiful floral arrangements, traditional ceremonies, delicious food, and unforgettable moments. Create a royal experience filled with elegance, love, and beautiful memories.",
        eventPicture: "https://png.pngtree.com/thumb_back/fh260/background/20241023/pngtree-the-celebration-of-graduation-day-image_16440334.jpg",
        place: "Rohini, New Delhi",
        city: " New Delhi",
        price: 40000,
        noGuests: 200,
        eventDate: "2026-6-15",
    },
    {
        id: 2,
        eventCategory: "Coding Workshop",
        eventName: "Tech Innovation Hall",
        // eventCode: "WED001",
        eventDetail: "A modern and well-equipped event hall perfect for coding workshops, programming sessions, and technology events. It provides a comfortable learning environment with spacious seating, high-speed internet, and modern facilities.",
        eventPicture: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        place: "Connaught Place",
        city: " New Delhi",
        price: 30000,
        noGuests: 200,
        eventDate: "2026-06-01",
    },
    {
        id: 3,
        eventCategory: "Science Exhibition",
        eventName: "Future Science Hall",
        // eventCode: "WED001",
        eventDetail: "A well-equipped venue for science exhibitions, educational displays, robotics projects, and interactive demonstrations.",
        eventPicture: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
        place: "Noida Sector 62",
        city: " Noida",
        price: 30000,
        noGuests: 200,
        eventDate: "2026-02-10",
    },
    {
        id: 4,
        eventCategory: "Quiz Competition",
        eventName: "FutureTech Hall",
        eventDetail: "A technology-focused venue ideal for coding workshops and educational seminars with a comfortable setup for interactive learning.",
        eventPicture: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
        place: "Dwarka",
        city: "New Delhi",
        price: 4500,
        noGuests: 90,
        eventDate: "2026-12-28",
    },
    {
        id: 5,
        eventCategory: "Career Guidance",
        eventName: "Digital Learning Center",
        eventDetail: "A professional venue for coding workshops, IT training, and educational events with modern facilities and a comfortable learning environment.",
        eventPicture: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
        place: "Saket",
        city: "New Delhi",
        price: 4000,
        noGuests: 80,
        eventDate: "2026-12-22",
    },
    {
        id: 6,
        eventCategory: "Educational Seminar",
        eventName: "Digital Learning Center",
        eventDetail: "A professional venue for coding workshops, IT training, and educational events with modern facilities and a comfortable learning environment.",
        eventPicture: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        place: "Saket",
        city: "New Delhi",
        price: 10000,
        noGuests: 120,
        eventDate: "2026-10-22",
    },
];


const Edetails = () => {
    const { id } = useParams();

    const educationEvent = education.find(
        (item) => item.id === Number(id)
    );
    if (!educationEvent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-red-500">
                    Event not found
                </h2>
            </div>
        );
    }

    return (
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
                            src={educationEvent.eventPicture}
                            alt={educationEvent.eventName}
                            className="w-full h-full min-h-[380px] object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 p-6">

                        <h2 className="text-3xl font-bold !text-purple-600">
                            {educationEvent.eventCategory}
                        </h2>

                        <h3 className="text-2xl text-black text-left mt-2">
                            {educationEvent.eventName}
                        </h3>

                        {/* <p className="text-gray-500 mt-1">
                      Event Code: {event.eventCode}
                    </p> */}

                        <p className="mt-5 text-black leading-7 text-left">
                            {educationEvent.eventDetail}
                        </p>

                        {/* Event Information */}
                        <div className="mt-6 space-y-4 text-black text-left">

                            <p>
                                <b>Place:</b> {educationEvent.place}
                            </p>

                            <p>
                                <b>City:</b> {educationEvent.city}
                            </p>

                            <p>
                                <b>Price:</b> ₹{educationEvent.price}
                            </p>

                            <p>
                                <b>Guests:</b> {educationEvent.noGuests}
                            </p>

                            <p>
                                <b>Date:</b>{" "}
                                {new Date(educationEvent.eventDate).toLocaleDateString()}
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-4">

                            <Link
                                to={`/booking/${educationEvent.id}`}
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                            >
                                Book Now
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Edetails