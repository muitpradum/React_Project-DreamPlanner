const Users = require("../model/userModel");
const bcrypt = require("bcrypt");

// Register
const register = async (req, res) => {
    try {
        const { name, email, password, phone, gender } = req.body;

        const user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "Email already registered",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            name,
            email,
            password: hashedPassword,
            phone,
            gender,
        });

        await newUser.save();

        res.status(201).json({
            message: "Registration successful",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email not registered",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login,
};