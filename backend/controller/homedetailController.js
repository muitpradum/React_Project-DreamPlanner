const Homedetail = require("../model/homedetail");

// POST - Create Homeevent
const createHomedetail = async (req, res) => {
    try {
        const { EventId, title, eventName, eventDetail, place, city, price, eventDate, eventPicture } = req.body;

        const newHomedetail = await Homedetail.create({
            EventId,
            title,
            eventName,
            eventDetail,
            place,
            city,
            price,
            eventDate,
            eventPicture,
        });

        res.status(201).json({
            message: "Homedetail successfully",
            data: newHomedetail,
        });
    } catch (error) {
        console.log("Event Error:", error);

        res.status(500).json({
            message: "Failed to event",
            error: error.message,
        });
    }
};

// GET - Get All Homedetail
const getHomedetail = async (req, res) => {
    try {
        const homedetail = await Homedetail.find().sort({ createdAt: -1 });

        res.status(200).json(homedetail);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get event",
            error: error.message,
        });
    }
};

// GET - Get Single Homedetail
const getHomedetailById = async (req, res) => {
    try {
        const homedetail = await Homedetail.findById(req.params.id);

        if (!homedetail) {
            return res.status(404).json({
                message: "Homedetail not found",
            });
        }

        res.status(200).json(homedetail);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get event",
            error: error.message,
        });
    }
};

// DELETE - Delete Homedetail
const deleteHomedetail = async (req, res) => {
    try {
        const homedetail= await Homedetail.findByIdAndDelete(req.params.id);

        if (!homedetail) {
            return res.status(404).json({
                message: "Event not found",
            });
        }

        res.status(200).json({
            message: "Event deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete event",
            error: error.message,
        });
    }
};
module.exports = {
    createHomedetail,
    getHomedetail,
    getHomedetailById,
    deleteHomedetail
};