import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Contact  from './pages/Contact'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Events from './pages/Events'
import SocialEvents from './Category/SocialEvents'
import Educational from './Category/Educational'
import Informal from './Category/Informal'
import Charity from './Category/Charity'
import Viewdetails from './Category/Viewdetails'
import Feedback from './pages/Feedback'
import EventDetails from './Category/EventDetails'
import Edetails from './Category/Edetails'
import Informalsdetails from './Category/Informalsdetails'
import Charitydetails from './Category/Charitydetails'
import Booking from './pages/Booking'
import AdminLogin from './pages/AdminLogin'
import Udetails from './Category/Udetails'


function App() {
  return (
    <>
    <BrowserRouter {import.meta.env.DEV ? "/" : "/React_Project-DreamPlanner"}>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/social" element={<SocialEvents />} />
        <Route path="/viewdetails/:id" element={<Viewdetails />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/edetails/:id" element={<Edetails/>} />
        <Route path="/informal" element={<Informal/>} />
        <Route path="/informaldetails/:id" element={<Informalsdetails/>} />
        <Route path="/charity" element={<Charity/>} />
        <Route path="/charitydetails/:id" element={<Charitydetails/>} />

        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/udetails/:id" element={<Udetails />} />
        


      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App