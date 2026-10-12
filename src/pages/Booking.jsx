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
        price: "",
        guests: 1,
        date: "",
        eventName: "",
        title: "",
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
            const bookingData = {
                EventId: id,
                ...formData,
                price: Number(formData.price),
                guests: Number(formData.guests)
            };

            // console.log("Booking ID:", id);
            // console.log("Booking Data:", bookingData);

            const response = await axios.post(
                "http://localhost:5000/api/bookings",
                bookingData
            );

            localStorage.setItem(
                "booking",
                JSON.stringify(bookingData)
            );

            alert(response.data.message || "Booking successful!");

            navigate("/");

        } catch (error) {
            console.error(
                "Booking Error:",
                error.response?.data || error
            );

            alert(
                error.response?.data?.error ||
                error.response?.data?.message ||
                "Booking failed!"
            );
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


            <div className="flex items-start justify-center bg-gray-100 ">
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
                            <select
                                type="text"
                                name="eventName"
                                placeholder="Enter your venue name"
                                value={formData.eventName}
                                onChange={handleChange}
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            >
                                <option value="">Select your venue name</option>
                                <option value="Royal Wedding">Royal Wedding</option>
                                <option value="Grand Harmony Hall">Grand Harmony Hall</option>
                                <option value=" Golden Crown Hall"> Golden Crown Hall</option>
                                <option value="StarLight Banquet">StarLight Banquet</option>
                                <option value="Digital Learning Center">Digital Learning Center</option>
                                <option value="Golden Crown Hotel">Golden Crown Hotel</option>
                                <option value="Royal Hotel">Royal Hotel</option>
                                <option value="FutureTech Hall">FutureTech Hall</option>
                                <option value="Tech Innovation Hall">Tech Innovation Hall</option>
                                <option value="Future Science Hall">Future Science Hall</option>
                                <option value="Harmony Arena">Harmony Arena</option>
                                <option value="ComedyLaugh Lounge">ComedyLaugh Lounge</option>
                                <option value="Celebration Ground">Celebration Ground</option>
                                <option value="Neon Club Hall">Neon Club Hall</option>
                                <option value="Live Beats Arena">Live Beats Arena</option>
                                <option value="Creative Stage Hall">Creative Stage Hall</option>
                                <option value="AIIMS Blood Bank">AIIMS Blood Bank</option>
                                <option value="Narayan Seva Sansthan">Narayan Seva Sansthan</option>
                                <option value="Annamrita Foundation">Annamrita Foundation</option>
                                <option value="Udayan Care">Udayan Care</option>
                                <option value="Teach For India">Teach For India</option>
                                <option value="Asha Bhawan">Asha Bhawan</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4 text-black ">
                            <select
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Select your event type"
                                className="w-full border p-3 rounded-lg bg-white  px-4 py-2"
                                required
                            >


                                <option value="">Select your event type</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Birthday Party">Birthday Party</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Graduation Party">Graduation Party</option>
                                <option value="Reunion Party">Reunion Party</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Graduation Ceremony">Graduation Ceremony</option>
                                <option value="Coding Workshop">Coding Workshop</option>
                                <option value="Science Exhibition">Science Exhibition</option>
                                <option value="Quiz Competition">Quiz Competition</option>
                                <option value="Career Guidance">Career Guidance</option>
                                <option value="Educational Seminar">Educational Seminar</option>
                                <option value="Music Concert">Music Concert</option>
                                <option value="DJ Night">DJ Night</option>
                                <option value="Stand-up Comedy">Stand-up Comedy</option>
                                <option value="Dandiya Night">Dandiya Night</option>
                                <option value="Rock Concert">Rock Concert</option>
                                <option value="Open Mic Night">Open Mic Night</option>
                                <option value="Blood Donation Camp">Blood Donation Camp</option>
                                <option value="NGO Support">NGO Support</option>
                                <option value="Food Donation Drive">Food Donation Drive</option>
                                <option value="Orphanage Visit">Orphanage Visit</option>
                                <option value="Education Support">Education Support</option>
                                <option value="Clothes Donation Drive">Clothes Donation Drive</option>
                                <option value="Other">Other</option>
                            </select>
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
                                name="price"
                                placeholder="Enter your price"
                                value={formData.price}
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