import React from "react";
import { Link,useParams } from "react-router-dom";

import ngo from "../assets/image/ngo.jfif";
import orphanage from "../assets/image/orphanage.jpg";
import foodDonation from "../assets/image/foodDonation.jfif";
import bloodDonation from "../assets/image/bloodDonation.jfif";
import education from "../assets/image/education.jfif";
import clothesDonation from "../assets/image/clothesDonation.png"

const charityEvents = [
  {
    id: 1,
    eventName: "NGO Support",
    eventDetail: "Support meaningful social initiatives by helping communities, children, and families in need.",
    eventPicture: ngo,
    place: "Rohini",
    city: "New Delhi",
    noGuests: 100,
    eventDate: "2026-11-10",
  },
  {
    id: 2,
    eventName: "Blood Donation Camp",
    eventDetail:
      "Join a community blood donation camp and support hospitals and patients who need blood.",
    eventPicture: bloodDonation,
    place: "Ansari Nagar ",
    city: "New Delhi",
    noGuests: 50,
    eventDate: "2026-11-15",

  },
  {
    id: 3,
    eventName: "Food Donation Drive",
    eventDetail:
      "Help provide nutritious meals to people in need through a community food donation drive.",
    eventPicture: foodDonation,
    place: "Saket",
    city: "New Delhi",
    price: 0,
    noGuests: 200,
    eventDate: "2026-11-20",
  },
  {
    id: 4,
    eventName: "Orphanage Visit",
    eventDetail:
      "Spend valuable time with children, share happiness, and contribute essential supplies and support.",
    eventPicture: orphanage,
    place: "Rohini",
    city: "New Delhi",
    noGuests: 150,
    eventDate: "2026-11-25",
  },
  {
    id: 5,
    eventName: "Education Support",
    eventDetail:
      "Support education by providing learning materials, guidance, and opportunities to children.",
    eventPicture: education,
    place: "Noida Sector 63",
    city: "Delhi-NCR",
    noGuests: 100,
    eventDate: "2026-12-01",
  },
  {
    id: 6,
    eventName: "Clothes Donation Drive",
    eventDetail:
      "Donate clothes to underprivileged families and help provide warmth, comfort, and essential support to those in need.",
    eventPicture: clothesDonation,
    place: "Lajpat Nagar",
    city: "New Delhi",
    noGuests: 100,
    eventDate: "2026-12-05",
  }
];

const Charitydetails = () => {
   const { id } = useParams();
  
      const charity = charityEvents.find(
          (item) => item.id === Number(id)
      );
      
      if (!charity) {
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
   
               <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
   
                   <div className="md:flex">
   
                       {/* Image */}
                       <div className="md:w-1/2">
                           <img
                               src={charity.eventPicture}
                               alt={charity.eventName}
                               className="w-full h-full min-h-[350px] object-cover"
                           />
                       </div>
   
                       {/* Details */}
                       <div className="md:w-2/3 p-6">
                           <h3 className="text-2xl text-black text-left mt-2">
                               {charity.eventName}
                           </h3>
                           <p className="mt-5 text-black leading-7 text-left">
                               {charity.eventDetail}
                           </p>
   
                           {/* Event Information */}
                           <div className="mt-6 space-y-4 text-black text-left">
   
                               <p>
                                   <b>Place:</b> {charity.place}
                               </p>
   
                               <p>
                                   <b>City:</b> {charity.city}
                               </p>
   
                               <p>
                                   <b>Guests:</b> {charity.noGuests}
                               </p>
   
                               <p>
                                   <b>Date:</b>{" "}
                                   {new Date(charity.eventDate).toLocaleDateString()}
                               </p>
   
                           </div>
   
                           {/* Buttons */}
                           <div className="mt-8 flex gap-4">
   
                               <Link
                                   to={`/booking/${charity.id}`}
                                   className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                               >
                                   Book Now
                               </Link>
   
                           </div>
   
                       </div>
                   </div>
               </div>
           </div>
  );
};

export default Charitydetails;