
const Charitydetails = require("../model/charitydetail");

// POST - Create Viewdetails
const createCharitydetails = async (req, res) => {
    try {
        const { EventId, title, eventName, eventDetail, place, city, guests, eventPicture, eventDate } = req.body;

        const newCharitydetails = await Charitydetails.create({
            EventId,
            title,
            eventName,
            eventDetail,
            place,
            city,
            guests,
            eventPicture,
            eventDate

        });

        res.status(201).json({
            message: "Charitydetails successfully",
            data: newCharitydetails,
        });
    } catch (error) {
        console.log("Event Error:", error);

        res.status(500).json({
            message: "Failed to event",
            error: error.message,
        });
    }
};

// GET - Get All Charitydetails
const getCharitydetails = async (req, res) => {
    try {
        const charitydetails = await Charitydetails.find().sort({ createdAt: -1 });

        res.status(200).json(charitydetails);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get event",
            error: error.message,
        });
    }
};

// GET - Get Single Viewdetails
// const getViewdetailsById = async (req, res) => {
//   try {
//     const viewdetails = await Viewdetails.findById(req.params.id);

//     if (!viewdetails) {
//       return res.status(404).json({
//         message: "Viewdetails not found",
//       });
//     }

//     res.status(200).json(viewdetails);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to get event",
//       error: error.message,
//     });
//   }
// };

// DELETE - Delete Viewdetails
// const deleteViewdetails = async (req, res) => {
//   try {
//     const viewdetails = await Viewdetails.findByIdAndDelete(req.params.id);

//     if (!viewdetails) {
//       return res.status(404).json({
//         message: "Event not found",
//       });
//     }

//     res.status(200).json({
//       message: "Event deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to delete event",
//       error: error.message,
//     });
//   }
// };
module.exports = {
    createCharitydetails,
    getCharitydetails,
    // getViewdetailsById,
    // deleteViewdetails
};