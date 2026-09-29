import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";


function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple admin login
        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {
            localStorage.setItem("admin", "true");
            navigate("/admin/dashboard");
        } else {
            alert("Invalid Admin Email or Password");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="text-center flex items-center justify-center gap-3">
                <h1 className="text-3xl font-bold !text-purple-500">
                    AdminLogin
                </h1>
            </div>
            <div className="flex items-start justify-center bg-gray-100">
                <div className="w-full max-w-lg p-10 rounded-lg shadow-lg bg-linear-65 from-purple-300 to-sky-300">
                    <form onSubmit={handleLogin} className="space-y-3">

                        <div>
                            <label className="block font-semibold text-left text-black mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter admin email"
                                    className="w-full border rounded-lg   pl-10 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold text-left text-black mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <FaKey className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full border rounded-lg  pl-10 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
                        >
                            Login
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default AdminLogin;