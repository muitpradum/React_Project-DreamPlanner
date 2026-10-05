import { FaComment, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/contacts",
        formData
      );
      alert("Message sent successfully");

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center ">
        <h1 className="text-4xl font-bold !text-purple-500">
          User Contact
        </h1>
      </div>
      <div className="flex items-start justify-center bg-gray-100">

        <div className="w-full max-w-lg  p-8 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">


          <form onSubmit={handleSubmit}>


            <div className="mb-4 text-black relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-white border border-gray-300 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 text-black relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-white border border-gray-300 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 text-black relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full bg-white border border-gray-300 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6 text-black relative">
              <FaComment className="absolute left-3 top-4 text-gray-500" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Enter your message"
                className="w-full bg-white border border-gray-300 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-rose-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>



      </div>
    </div>
  );
}

export default Contact;