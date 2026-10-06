import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
function Events() {

  const [events,setEvents]=useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/events"
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


  return (
    <div className="bg-gray-100 py-12">

      <h1 className="text-4xl font-bold text-center !text-purple-600 mb-10">
        Our Events
      </h1>

       {/* Error */}
        {error && (
          <p className="text-center text-red-500 mb-6">
            {error}
          </p>
        )}
    
  
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
          >

            <img
              src={event.eventPicture}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
               {event.title}
              </h2>
             <div  className="text-gray-600 mb-2 text-left">
              
              <strong className="text-black"> Venue Name : </strong>{event.eventName}<br/>
              <strong className="text-black text-left">Place : </strong> {event.eventPlace}<br/>
              <strong className="text-black">Price : </strong> {event.price}<br/>
              <strong className="text-black">Guests : </strong> {event.guests}
              
              </div>

              <Link to={`/eventdetails/${event.eventid}`}
              className="bg-purple-500 text-white px-2 py-1  rounded-lg
              hover:bg-sky-300 transition"
            >
              Event Details
            </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Events;