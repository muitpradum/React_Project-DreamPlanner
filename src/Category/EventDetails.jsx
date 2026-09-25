import { Link, useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    eventCategory: "Wedding",
    eventName: "Royal Wedding",
    // eventCode: "WED001",
    eventDetail:"Make your wedding day memorable with beautiful decorations, catering, music and complete event arrangements.",
    eventPicture:"https://www.alfaazphotography.com/wp-content/uploads/2020/05/FW-_-SA-1621-scaled.jpg",
    place: "Gomti Nagar, Lucknow",
    city: "Lucknow",
    price: 50000,
    noGuests: 500,
    eventDate: "2026-12-15",
  },
  {
    id: 2,
    eventCategory: "Birthday",
    eventName: "Grand Harmony Hall",
    // eventCode: "BDAY001",
    eventDetail:"Celebrate your special birthday with beautiful decorations, delicious food and entertainment.",
    eventPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDQqOzrbmSCVtn3M5B-rumLzFcZKVEE-UXEndO6RCuA&s=10",
    place: "Aliganj, Lucknow",
    city: "Lucknow",
    price: 25000,
    noGuests: 150,
    eventDate: "2026-11-20",
  },
  {
    id: 3,
    eventCategory: "Anniversary",
    eventName: "Golden Crown Hall",
    // eventCode: "ANN001",
    eventDetail:"Golden Crown Hall is a luxurious and spacious venue perfect for weddings, receptions, anniversaries, parties, and special celebrations. With elegant interiors, beautiful decorations, modern facilities, and excellent hospitality, it provides a memorable setting for every occasion.",
    eventPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYX3Fb152vGtQTGkFzpkm6QbyuhiBEbRup6PC-Lm0Hz6ygS0ddhcrTlq4&s=10",
    place: "Hazratganj, Lucknow",
    city: "Lucknow",
    price: 30000,
    noGuests: 100,
    eventDate: "2026-10-25",
  },
   {
    id: 4,
    eventCategory: "Party",
    eventName: "StarLight Banquet",
    // eventCode: "ANN001",
    eventDetail:"Celebrate your anniversary with a romantic setup, dinner and beautiful decorations.",
    eventPicture:"https://images.unsplash.com/photo-1496337589254-7e19d01cec44",
    place: "Indira Nagar, Lucknow",
    city: "Lucknow",
    price: 10000,
    noGuests: 80,
    eventDate: "2026-8-25",
  },
  {
    id: 5,
    eventCategory: "Concert",
    eventName: "Golden Crown Hall.",
    // eventCode: "ANN001",
    eventDetail:"Golden Crown Hall is a luxurious and spacious venue perfect for weddings, receptions, anniversaries, parties, and special celebrations. With elegant interiors, beautiful decorations, modern facilities, and excellent hospitality, it provides a memorable setting for every occasion.",
    eventPicture:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    place: "Alambagh, Lucknow",
    city: "Lucknow",
    price: 25000,
    noGuests: 150,
    eventDate: "2026-2-25",
  },
   {
    id: 6,
    eventCategory: "Seminar",
    eventName: "Digital Learning Center",
    // eventCode: "ANN001",
    eventDetail:"A professional venue for coding workshops, IT training, and educational events with modern facilities and a comfortable learning environment.",
    eventPicture:"https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    place: "Mahanagar, Lucknow",
    city: "Lucknow",
    price: 20000,
    noGuests: 100,
    eventDate: "2026-05-25",
  },
];

function EventDetails() {
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
                🏙️ <b>City:</b> {event.city}
              </p>

              <p>
                💰 <b>Price:</b> ₹{event.price}
              </p>

              <p>
                👥 <b>Guests:</b> {event.noGuests}
              </p>

              <p>
                📅 <b>Date:</b>{" "}
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

              <button
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
              >
                Request Pricing
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
