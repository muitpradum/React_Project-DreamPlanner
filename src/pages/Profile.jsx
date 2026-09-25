import { useState } from "react";

function Profile() {
    const [user, setUser] = useState({
        name: "Pradum Sonkar",
        email: "pradum@example.com",
        phone: "9876543210",
        city: "Pune",
    });

    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 ">

            <div className="text-center ">
                <h1 className="text-3xl font-bold !text-purple-500">
                    Your Profile
                </h1>
            </div>
            <div>
                <p className="text-center text-gray-500 mb-6">
                    Manage your account details
                </p>
            </div>
           <div className="flex items-start justify-center bg-gray-100">
                <div className="w-full max-w-lg m-5 p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">

                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        {user.name.charAt(0)}
                    </div>
                </div>
                {/* Name */}
                <div className="mb-2">
                    <label className="block text-left text-black font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        disabled={!edit}
                        className="w-full border rounded-lg bg-white px-4 py-2 disabled:bg-gray-100"
                    />
                </div>

                {/* Email */}
                <div className="mb-2">
                    <label className="block text-left text-black font-semibold mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!edit}
                        className="w-full border rounded-lg bg-white px-4 py-2 disabled:bg-gray-100"
                    />
                </div>

                {/* Phone */}
                <div className="mb-2">
                    <label className="block text-left text-black font-semibold mb-1">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        disabled={!edit}
                        className="w-full border rounded-lg bg-white px-4 py-2 disabled:bg-gray-100"
                    />
                </div>

                {/* City */}
                <div className="mb-6">
                    <label className="block text-left text-black font-semibold mb-1">City</label>
                    <input
                        type="text"
                        name="city"
                        value={user.city}
                        onChange={handleChange}
                        disabled={!edit}
                        className="w-full border rounded-lg bg-white px-4 py-2 disabled:bg-gray-100"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={() => setEdit(!edit)}
                    className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-rose-300"
                >
                    {edit ? "Save Profile" : "Edit Profile"}
                </button>

            </div>
            </div>
        </div>
    );
}

export default Profile;
