import { Link, useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    eventCategory: "Wedding",
    eventName: "Royal Wedding",
    // eventCode: "WED001",
    eventDetail: "A Royal Wedding is a grand and elegant celebration featuring luxurious decorations, beautiful floral arrangements, traditional ceremonies, delicious food, and unforgettable moments. Create a royal experience filled with elegance, love, and beautiful memories.",
    eventPicture: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2022/03/image4-1080x565.jpg",
    place: "Rohini, New Delhi",
    city: " New Delhi",
    price: 50000,
    noGuests: 500,
    eventDate: "2026-12-15",
  },
  {
    id: 2,
    eventCategory: "Birthday",
    eventName: "Grand Harmony Hall",
    // eventCode: "BDAY001",
    eventDetail: "Grand Harmony Hall is an elegant event venue perfect for weddings, receptions, birthdays, and special celebrations. With spacious interiors, beautiful decorations, modern facilities, and a welcoming atmosphere, it provides the perfect setting for creating unforgettable memories..",
    eventPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDQqOzrbmSCVtn3M5B-rumLzFcZKVEE-UXEndO6RCuA&s=10",
    place: "Dwarka, New Delhi",
    city: "New Delhi",
    price: 25000,
    noGuests: 150,
    eventDate: "2026-11-20",
  },
  {
    id: 3,
    eventCategory: "Anniversary",
    eventName: "Golden Crown Hall",
    // eventCode: "ANN001",
    eventDetail: "Golden Crown Hall is a luxurious and comfortable venue perfect for weddings, receptions, parties, and special events. With elegant interiors, spacious halls, excellent hospitality, and modern facilities, it offers a memorable experience for every celebration.",
    eventPicture: "https://i.pinimg.com/736x/a7/50/b6/a750b6e2b9098091e7a5c3b51c74b344.jpg",
    place: "Noida-Sector 63, Delhi-NCR",
    city: "Delhi-NCR",
    price: 15000,
    noGuests: 50,
    eventDate: "2026-11-01",
  },
  {
    id: 4,
    eventCategory: "Engagement",
    eventName: "Royal Wedding",
    // eventCode: "BDAY001",
    eventDetail: "Royal Wedding is an elegant event venue perfect for weddings, receptions, birthdays, and special celebrations. With spacious interiors, beautiful decorations, modern facilities, and a welcoming atmosphere, it provides the perfect setting for creating unforgettable memories..",
    eventPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDQqOzrbmSCVtn3M5B-rumLzFcZKVEE-UXEndO6RCuA&s=10",
    place: "Janakpuri, New Delhi",
    city: "New Delhi",
    price: 25000,
    noGuests: 100,
    eventDate: "2026-10-25",

  },
  {
    id: 5,
    eventCategory: "Anniversary",
    eventName: "Golden Crown Hotel",
    // eventCode: "ANN001",
    eventDetail: "Golden Crown Hotel is a luxurious and comfortable venue perfect for weddings, receptions, parties, and special events. With elegant interiors, spacious halls, excellent hospitality, and modern facilities, it offers a memorable experience for every celebration.",
    eventPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0e_Zg3g8YXHvS0sv2-FGPVERlj-s-ulkT3hP9Mp4FK5ExaYBefbROHFDI&s=10",
    place: "India Gate, New Delhi",
    city: "New Delhi",
    price: 25000,
    noGuests: 100,
    eventDate: "2026-11-15",
  },
  {
    id: 6,
    eventCategory: "Reunion Party",
    eventName: "Royal Hotel",
    // eventCode: "WED001",
    eventDetail: "A Royal Hotel is a grand and elegant celebration featuring luxurious decorations, beautiful floral arrangements, traditional ceremonies, delicious food, and unforgettable moments. Create a royal experience filled with elegance, love, and beautiful memories.",
    eventPicture: "https://i.pinimg.com/736x/02/a9/fa/02a9fabc149048ff137106c40aff4cda.jpg",
    place: "Pragati Maidan, New Delhi",
    city: " New Delhi",
    price: 30000,
    noGuests: 80,
    eventDate: "2026-09-15",
  },
];

function Viewdetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

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

        {/* Heading */}
        {/* <h1 className="text-3xl text-center font-bold mb-8">
        {/* Event : { id } */}
        {/* <span className="text-purple-600">
          Details
        </span> */}
        {/* </h1> *} */}

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="md:flex">

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={event.eventPicture}
                alt={event.eventName}
                className="w-full h-full min-h-[380px] object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-2/3 p-6">

              <h2 className="text-3xl font-bold !text-purple-600">
                {event.eventCategory}
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
                  <b>Place:</b> {event.place}
                </p>

                <p>
                  <b>City:</b> {event.city}
                </p>

                <p>
                  <b>Price:</b> ₹{event.price}
                </p>

                <p>
                  <b>Guests:</b> {event.noGuests}
                </p>

                <p>
                  <b>Date:</b>{" "}
                  {new Date(event.eventDate).toLocaleDateString()}
                </p>

              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">

                <Link
                  to={`/booking/${event.id}`}
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
