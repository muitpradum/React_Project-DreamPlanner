import React from 'react'
import { Link } from 'react-router-dom';
import social from "../assets/image/7d62f172-3a9c-4e50-b345-455ba2de6dc4.jfif";
import education from "../assets/image/1196904f-715d-434a-b940-f205f66618a0.jfif";
import informal from "../assets/image/informal.jfif"
import charity from "../assets/image/charity.jfif"


const EventCategory = () => {
    const socialEvents = [
        {
            id: 1,
            title: "Social Events",
            image: social,
        }];
    const edEvents =
        [{
            id: 1,
            title: "Education Events",
            image: education,
        }];
    const inEvents =
        [{
            id: 1,
            title: "Informal Events",
            image: informal,
        }];
    const charityEvents =
        [{
            id: 1,
            title: "Charity Events",
            image: charity,
        }];

    return (
        <div className="bg-white-100 py-8">

            <h1 className="text-4xl font-bold text-center mb-12">
                Events<span className='!text-purple-600'> Category</span>

            </h1>

            <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
                {/* Social Events */}
                {socialEvents.map((sevent) => (
                    <div
                        key={sevent.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
                    >

                        <img
                            src={sevent.image}
                            alt={sevent.title}
                            className="w-full h-62 object-cover"
                        />
                        <div className="p-5">

                            <h2 className="text-2xl font-bold !text-blue-800 mb-2">
                                <Link to="/social">
                                    {sevent.title}
                                </Link>
                            </h2>





                        </div>

                    </div>
                ))}
                {/* Educational Events */}
                {edEvents.map((edevent) => (
                    <div
                        key={edevent.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
                    >

                        <img
                            src={edevent.image}
                            alt={edevent.title}
                            className="w-full h-62 object-cover"
                        />
                        <div className="p-5">

                            <h2 className="text-2xl font-bold !text-blue-800 mb-2">
                                <Link to="/educational">
                                    {edevent.title}
                                </Link>
                            </h2>





                        </div>

                    </div>
                ))}

                {/* Informal Events */}
                {inEvents.map((inevent) => (
                    <div
                        key={inevent.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
                    >

                        <img
                            src={inevent.image}
                            alt={inevent.title}
                            className="w-full h-62 object-cover"
                        />
                        <div className="p-5">

                            <h2 className="text-2xl font-bold !text-blue-800 mb-2">
                                <Link to="/informal">
                                    {inevent.title}
                                </Link>
                            </h2>





                        </div>

                    </div>
                ))}
                {/* Charity Events*/}
                {charityEvents.map((chevent) => (
                    <div
                        key={chevent.id}
                        className="bg-white rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300"
                    >

                        <img
                            src={chevent.image}
                            alt={chevent.title}
                            className="w-full h-62 object-cover"
                        />
                        <div className="p-5">

                            <h2 className="text-2xl font-bold !text-blue-800 mb-2">
                                <Link to="/charity">
                                    {chevent.title}
                                </Link>
                            </h2>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default EventCategory