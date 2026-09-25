import React from 'react'
import { Link, useParams } from "react-router-dom";
import musicConcert from "../assets/image/musicConcert.jpg";
import djNight from "../assets/image/djNight.jpg";
import standupComedy from "../assets/image/standupComedy.jpeg";
import dandiyaNight from "../assets/image/dandiyaNight.avif";
import rockConcert from "../assets/image/RockConcert.jpg"
import openMicnight from "../assets/image/openMicNight.jpg"
const inEvents = [
    {
        id: 1,
        eventCategory: "Music Concert",
        eventName: "Harmony Arena",
        eventDetail: "Harmony Arena is a lively and elegant venue perfect for music concerts, live performances, cultural events, and entertainment shows. With a spacious stage, modern lighting, excellent sound, and a vibrant atmosphere, it creates an unforgettable experience for every guest.",
        eventPicture: musicConcert,
        city: "New Delhi",
        place: "Connaught Place, New Delhi",
        price: 40000,
        noGuests: 300,
        eventDate: "2026-12-10",
    },
    {
        id: 2,
        eventCategory: "DJ Night",
        eventName: " Neon Club Hall",
        eventDetail: "Neon Club Hall is a stylish and energetic venue perfect for DJ nights, parties, music events, and late-night celebrations. With vibrant neon lighting, powerful sound systems, a spacious dance floor, and a lively atmosphere, it offers an exciting experience for guests.",
        eventPicture: djNight,
        place: "Saket",
        city: "New Delhi",
        price: 10000,
        noGuests: 300,
        eventDate: "2026-12-15",
    },
    {
        id: 3,
        eventCategory: "Dandiya Night",
        eventName: "Celebration Ground",
        eventDetail: "Celebration Ground is a spacious and vibrant venue perfect for Dandiya nights, cultural programs, festivals, parties, and large celebrations. With open space, colorful decorations, lively music, and a festive atmosphere, it creates memorable experiences for everyone.",
        eventPicture: dandiyaNight,
        place: "Hauz Khas",
        city: "New Delhi",
        price: 5000,
        noGuests: 150,
        eventDate: "2026-12-20",
    },
    {
        id: 4,
        eventCategory: "Standup Comedy",
        eventName: "ComedyLaugh Lounge",
        eventDetail: "ComedyLaugh Lounge is a fun and welcoming venue for stand-up comedy, live performances, and entertainment shows. With a cozy atmosphere, comfortable seating, and plenty of laughter, it provides an enjoyable experience for audiences and comedians.",
        eventPicture: standupComedy,
        place: "Dwarka",
        city: "New Delhi",
        price: 8000,
        noGuests: 400,
        eventDate: "2026-12-25",
    },
    {
        id: 5,
        eventCategory: "Rock Concert",
        eventName: "Live Beats Arena",
        eventDetail: "Live Beats Arena is a lively entertainment venue designed for music concerts, DJ nights, live performances, and cultural events. With powerful sound, vibrant lighting, a spacious stage, and an energetic atmosphere, it offers an exciting experience for guests and performers.",
        eventPicture: rockConcert,
        city: "New Delhi",
        place: "Saket, New Delhi",
        price: 40000,
        noGuests: 280,
        eventDate: "2026-7-2",
    },
    {
        id: 6,
        eventCategory: "Open Mic Night",
        eventName: "Creative Stage Hall",
        eventDetail: "Creative Stage Hall is a vibrant and modern venue perfect for music concerts, DJ nights, comedy shows, cultural programs, and entertainment events. With a spacious stage, attractive lighting, excellent sound systems, and comfortable seating, it creates an exciting atmosphere for memorable events.",
        eventPicture: openMicnight,
        city: "New Delhi",
        place: "Greater Kailash, New Delhi",
        price: 50000,
        noGuests: 320,
        eventDate: "2026-7-2",
    },
];


const Informalsdetails = () => {
    const { id } = useParams();

    const informal = inEvents.find(
        (item) => item.id === Number(id)
    );
    
    if (!informal) {
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

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

                <div className="md:flex">

                    {/* Image */}
                    <div className="md:w-2/3">
                        <img
                            src={informal.eventPicture}
                            alt={informal.eventName}
                            className="w-full h-full min-h-[380px] object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 p-6">

                        <h2 className="text-3xl font-bold !text-purple-600">
                            {informal.eventCategory}
                        </h2>

                        <h3 className="text-2xl text-black text-left mt-2">
                            {informal.eventName}
                        </h3>

                        {/* <p className="text-gray-500 mt-1">
                      Event Code: {event.eventCode}
                    </p> */}

                        <p className="mt-5 text-black leading-7 text-left">
                            {informal.eventDetail}
                        </p>

                        {/* Event Information */}
                        <div className="mt-6 space-y-4 text-black text-left">

                            <p>
                                <b>Place:</b> {informal.place}
                            </p>

                            <p>
                                <b>City:</b> {informal.city}
                            </p>

                            <p>
                                <b>Price:</b> {informal.price}
                            </p>

                            <p>
                                <b>Guests:</b> {informal.noGuests}
                            </p>

                            <p>
                                <b>Date:</b>{" "}
                                {new Date(informal.eventDate).toLocaleDateString()}
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex gap-4">

                            <Link
                                to={`/booking/${informal.id}`}
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

export default Informalsdetails