
const Educationdetails = require("../model/educationdetail");

// POST - Create Educationdetails
const createEducationdetails = async (req, res) => {
  try {
    const { EventId,title, eventName,eventDetail, place,city, price, guests, eventPicture, } = req.body;

    const newEducationdetails = await Educationdetails.create({
      EventId,
      title,
      eventName,
      eventDetail,
      place,
      city,
      price,
      guests,
      eventPicture,
      
    });

    res.status(201).json({
      message: "Educationdetails successfully",
      data: newEducationdetails,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Educationdetails
const getEducationdetails = async (req, res) => {
  try {
    const educationdetails = await Educationdetails.find().sort({ createdAt: -1 });

    res.status(200).json(educationdetails);
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
    createEducationdetails,
    getEducationdetails,
    // getViewdetailsById,
    // deleteViewdetails
};