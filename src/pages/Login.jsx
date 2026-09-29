
import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      alert(response.data.message);

      // Save user
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Go to dashboard
      navigate("/React_Project-DreamPlanner");

    } catch (error) {
       alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center flex items-center justify-center gap-3">
     
        <h1 className="text-3xl font-bold !text-purple-500">
          Login
        </h1>
      </div>
      <div className="flex items-start justify-center bg-gray-100">
        <div className="w-full max-w-lg p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">
          <form onSubmit={handleLogin}>


            <div className="mb-4 text-left font-semibold ">
              <label
                htmlFor="email"
                className="block text-lg text-black mb-1"
              >
                Email 
              </label>
              <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-400 rounded-md  pl-10 px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
              
            </div>


            <div className="mb-6 text-left font-semibold ">
              <label
                htmlFor="password"
                className="block text-lg text-black mb-1"
              >
                Password
              </label>
              <div className="relative">
              <FaKey className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full bg-white border border-gray-400 rounded-md  pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 px-41 rounded-md font-semibold hover:bg-rose-300"
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </div>


  );
}

export default Login;

