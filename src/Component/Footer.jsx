
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">

      <div className="container mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-4">
              DreamPlanner
            </h3>

            <p className="text-gray-400 leading-6">
              DreamPlanner helps you plan and manage your special
              events with ease. Create unforgettable moments with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-purple-400">
                  About
                </Link>
              </li>

              <li>
                <Link to="/events" className="hover:text-purple-400">
                  Events
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Events
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Wedding</li>
              <li>Birthday</li>
              <li>Anniversary</li>
              <li>Party</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400 mb-2 relative py-1 pl-6 ">
              <FaLocationArrow className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/>Delhi, New Delhi, India
            </p>

           <p className="text-gray-400 relative py-3 pl-8">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              dreamplanner3@gmail.com
            </p>

            <p className="text-gray-400 relative px-3">
              <FaPhoneAlt className="absolute left-3 top-1/4 text-gray-500" /> +91 8127636924
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 pl-5">

              <a href="#" className="text-xl hover:text-blue-500">
                <FaFacebook />
              </a>

              <a href="#" className="text-xl hover:text-pink-500">
                <FaInstagram />
              </a>

              <a href="#" className="text-xl hover:text-blue-400">
                <FaTwitter />
              </a>

              <a href="https://www.linkedin.com/in/pradumsonkar/" className="text-xl hover:text-blue-600">
                <FaLinkedin />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-400">
            © 2026 DreamPlanner. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

