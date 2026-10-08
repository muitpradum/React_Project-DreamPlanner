import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Viewdetails() {
  
  const { id } = useParams();
 
  const [viewdetails, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/viewdetails"
      );

      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Unable to load events");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#FFFFE0]">
        <h2 className="text-2xl font-semibold">
          Loading Projects...
        </h2>
      </div>
    );
  }
   

  const event = viewdetails.find(
    (item) => item.EventId?.toString() === id
);
  

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
      {/* Social events */}
      <div className="min-h-screen bg-gray-100 py-10">

        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="md:flex">

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={event.eventPicture}
                alt={event.title}
                className="w-full h-full min-h-[380px] object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3 p-6">

              <h2 className="text-3xl font-bold !text-purple-600">
                {event.title}
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
                  <b>Place:</b> {event.eventPlace}
                </p>

                <p>
                  <b>City:</b> {event.eventCity}
                </p>

                <p>
                  <b>Price:</b> ₹{event.price}
                </p>

                <p>
                  <b>Guests:</b> {event.guests}
                </p>

               

              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">

                <Link
                  to={`/booking/${event.EventId}`}
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
  );
}

export default Viewdetails;
