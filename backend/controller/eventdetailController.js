
const Eventdetails = require("../model/eventdetail");

// POST - Create Viewdetails
const createEventdetails = async (req, res) => {
  try {
    const { EventId,title, eventName,eventDetail, eventPlace,eventCity, price, guests, eventPicture, } = req.body;

    const newEventdetails = await Eventdetails.create({
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
      message: "Eventdetails successfully",
      data: newEventdetails,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Eventdetails
const getEventdetails = async (req, res) => {
  try {
    const eventdetails = await Eventdetails.find().sort({ createdAt: -1 });

    res.status(200).json(eventdetails);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Eventdetails
const getEventdetailsById = async (req, res) => {
  try {
    const eventdetails = await Eventdetails.findById(req.params.id);

    if (!eventdetails) {
      return res.status(404).json({
        message: "Eventdetails not found",
      });
    }

    res.status(200).json(eventdetails);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Eventdetails
const deleteEventdetails = async (req, res) => {
  try {
    const eventdetails = await Eventdetails.findByIdAndDelete(req.params.id);

    if (!eventdetails) {
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
    createEventdetails,
    getEventdetails,
    getEventdetailsById,
    deleteEventdetails
};