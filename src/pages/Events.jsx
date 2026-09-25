import {Link} from "react-router-dom"
import { FaSearch } from "react-icons/fa";
function Events() {
  const events = [
    {
      id: 1,
      title: "Wedding",
      hallname: "Royal Wedding",
      place:"Gomti Nagar, Lucknow ",
      price:50000,
      guests:500,
      image: "https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg",
    },
    {
      id: 2,
      title: "Birthday",
      hallname: "Grand Harmony Hall",
      place:"Aliganj, Lucknow",
      price:15000,
      guests:150,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDQqOzrbmSCVtn3M5B-rumLzFcZKVEE-UXEndO6RCuA&s=10",
    },
    {
      id: 3,
      title: "Anniversary",
      hallname: "Golden Crown Hall",
      place:"Hazratganj, Lucknow",
      price:20000,
      guests:120,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYX3Fb152vGtQTGkFzpkm6QbyuhiBEbRup6PC-Lm0Hz6ygS0ddhcrTlq4&s=10",
    },
    {
      id: 4,
      title: "Party",
      hallname: "StarLight Banquet",
      place:"Indira Nagar, Lucknow",
      price:10000,
      guests:80,
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44",
    },
    {
      id: 5,
      title: "Concert",
      hallname: "Golden Crown Hall",
      place:"Alambagh, Lucknow",
      price:25000,
      guests:150,
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },
    {
      id: 6,
      title: "Seminar",
      hallname: "Digital Learning Center",
      place:"Mahanagar, Lucknow",
      price:20000,
      guests:100,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">

      <h1 className="text-4xl font-bold text-center !text-purple-600 mb-10">
        Our Events
      </h1>
    
    {/* <div className="p-5 relative ">
    <FaSearch className="absolute right-70 top-1/2 -translate-y-1/2 text-gray-500" />
    <input type="search" placeholder="Search Events"  
    className="w-120 bg-white border border-gray-400 rounded-md pl-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

    </input>
    </div> */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
          >

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
               {event.title}
              </h2>
             <div  className="text-gray-600 mb-2 text-left">
              
              <strong className="text-black"> Venue Name : </strong>{event.hallname}<br/>
              <strong className="text-black text-left">Place : </strong> {event.place}<br/>
              <strong className="text-black">Price : </strong> {event.price}<br/>
              <strong className="text-black">Guests : </strong> {event.guests}
              
              </div>

              <Link to={`/eventdetails/${event.id}`}
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