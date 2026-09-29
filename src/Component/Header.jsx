
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function Header() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 h-8 bg-linear-65 from-purple-400 to-sky-300">

        <div className=" p-1 text-white">
          8127636924
        </div>

        <div className="p-1 text-white">
          dreamplanner3@gmail.com
        </div>

        <div className=" p-1 text-white">
          Welcome to DreamPlanner
        </div>

        <div className=" p-2 text-white flex justify-center gap-4">
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
      <div className="grid grid-cols-2 gap-4">

        <span className="font-bold p-3 text-xl">
          Dream<span className="text-purple-600">Planner</span>
        </span>

        <div className="p-3 text-black ">
          <Link
            to="/login"
            className="bg-gray-200 text-black-600 px-4 py-2 rounded-lg hover:bg-linear-65 from-purple-300 to-sky-300"
          >

            Login
          </Link>

          {/* Logout Button */}
          <Link
            to="/feedback"
            className="bg-gray-200 text-black-600  mx-5 px-4 py-2 rounded-lg hover:bg-linear-65 from-purple-300 to-sky-300"
          >
            Feedback
          </Link>
        </div>

      </div>

      <header className="h-14 bg-linear-65 from-sky-300 to-purple-400 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">

          {/* Navbar */}
          <div className="flex items-center gap-6 ">
            <Link
              to="/React_Project-DreamPlanner"
              className="hover:text-yellow-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-yellow-300"
            >
              About Us
              
            </Link>

            <Link
              to="/events"
              className="hover:text-yellow-300"
            >
              Events
            </Link>

            {/* <Link
              to="/succressevents"
              className="hover:text-yellow-300"
            >
              Successfull Events
            </Link> */}

            <Link
              to="/contact" 
              className="hover:text-yellow-300"
            >
              Contact Us
            </Link>

            <Link
              to="/register"
              className="hover:text-yellow-300"
            >
              Registration
            </Link>

            <Link
              to="/admin"
              className="hover:text-yellow-300"
            >
              Admin
            </Link>

            <Link
              to="/profile"
              className="hover:text-yellow-300"
            >
              Profile
            </Link>

          </div>

        </nav>
      </header>
      
    </>
  );
}

export default Header;

