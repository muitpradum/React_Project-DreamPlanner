import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        date: "",
        eventName: "",
        eventCategory: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/api/bookings",
                {
                    eventId: id,
                    ...formData,
                }
            );

            alert(response.data.message || "Booking successful!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Booking failed!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold !text-purple-500 relative">
                    User Booking
                </h1>
            </div>
             <p className="text-center text-gray-500 mb-6">
                            Event ID: {id}
                        </p>


            <div className="flex items-start justify-center bg-gray-100">
                <div className="w-full max-w-lg m-5 p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">

                    <form onSubmit={handleSubmit} className="space-y-4">
                       

                        <div className="mb-4 text-black ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>

                        <div className="mb-4 text-black ">
                            <input
                                type="text"
                                name="eventName"
                                placeholder="Enter your venue name"
                                value={formData.eventName}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>
                       
                        <div className="mb-4 text-black ">
                            <input
                                type="text"
                                name="eventCatergory"
                                placeholder="Enter your event name"
                                value={formData.eventCategory}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>

                        <div className="mb-4 text-black ">
                            <input
                                type="email"
                                name="email"
                                placeholder=" Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>

                        <div className="mb-4 text-black ">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>

                        <div className="mb-4 text-black ">
                            <input
                                type="number"
                                name="guests"
                                min="1"
                                placeholder="Enter your number of guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>

                        <div className="mb-6 text-black ">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
                        >
                            Confirm Booking
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;