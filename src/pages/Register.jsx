import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaKey, FaVenusMars, FaPhoneAlt, FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });
  const navigate = useNavigate();

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
        "http://localhost:5000/api/users/register",
        formData
      );

      alert(response.data.message);

      // Go to login
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };




  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold !text-purple-500 relative">
          User Registration
        </h1>
      </div>
      <div className="flex items-start justify-center bg-gray-100">
        <div className="w-full max-w-lg p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">



          <form onSubmit={handleSubmit}>

            <div className="mb-4 text-black relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-white border border-gray-400 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 text-black relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-400 rounded-md  pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 text-black relative">
              <FaKey className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full bg-white border border-gray-400 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 text-black relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone"
                className="w-full bg-white border border-gray-400 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 text-black relative">
              <FaVenusMars className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                placeholder="Enter your gender"
                className="w-full bg-white border border-gray-400 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-2 rounded-md font-semibold hover:bg-rose-300"
            >
              Register
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;