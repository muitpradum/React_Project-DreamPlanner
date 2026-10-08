
const Informaldetails = require("../model/informaldetail");

// POST - Create Viewdetails
const createInformaldetails = async (req, res) => {
  try {
    const { EventId,title, eventName,eventDetail, eventPlace,eventCity, price, guests, eventPicture, } = req.body;

    const newInformaldetails = await Informaldetails.create({
      EventId,
      title,
      eventName,
      eventDetail,
      eventPlace,
      eventCity,
      price,
      guests,
      eventPicture,
      
    });

    res.status(201).json({
      message: "Informaldetails successfully",
      data: newInformaldetails,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Informaldetails
const getInformaldetails = async (req, res) => {
  try {
    const informaldetails = await Informaldetails.find().sort({ createdAt: -1 });

    res.status(200).json(informaldetails);
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
    createInformaldetails,
    getInformaldetails,
    // getViewdetailsById,
    // deleteViewdetails
};