
import { useState } from "react";

function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: "",
        rating: "",
        feedback: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        alert("Thank you for your feedback!");

        setFormData({
            name: "",
            email: "",
            event: "",
            rating: "",
            feedback: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 ">

            <div className="text-center ">
                <h1 className="text-3xl font-bold !text-purple-500">
                    Your Feedback
                </h1>

            </div>
            <div >
                <p className="text-center text-gray-500 mb-10">
                    Share your experience with us
                </p>
            </div>
            <div className="flex items-start justify-center bg-gray-100">
                <div className="w-full max-w-lg m-5 p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">



                    <form onSubmit={handleSubmit} className="space-y-2">

                        {/* Name */}
                        <div>
                            <label className="block text-black font-semibold mb-1 text-left">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full  bg-white px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block font-semibold mb-1 text-left text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full bg-white px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Event */}
                        <div>
                            <label className="block font-semibold mb-1 text-left text-black">
                                Event
                            </label>
                            <select
                                name="event"
                                value={formData.event}
                                onChange={handleChange}
                                className="w-full bg-white px-4 py-2 border rounded-lg "
                                required
                            >
                                <option value="">Select Event</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Party">Party</option>
                                <option value="Concert">Concert</option>
                                <option value="Seminar">Seminar</option>
                            </select>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block  font-semibold mb-2 text-left text-black">
                                Rate Your Experience
                            </label>

                            <div className="flex gap-5 bg-white px-4 py-2 rounded-lg border">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <label key={rating} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={rating}
                                            checked={formData.rating === String(rating)}
                                            onChange={handleChange}
                                            className="mr-1"
                                            required
                                        />
                                        {rating}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div>
                            <label className="block font-semibold mb-1 text-left text-black">
                                Your Feedback
                            </label>
                            <textarea
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Write your feedback..."
                                className="w-full bg-white px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-rose-300"
                        >
                            Submit Feedback
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
