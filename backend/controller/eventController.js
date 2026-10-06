const Event = require("../model/userEvent");

// POST - Create Event
const createEvent = async (req, res) => {
  try {
    const { title, eventName, eventPlace, price, guests, eventPicture } = req.body;

    const newEvent = await Event.create({
      
      title,
      eventName,
      eventPlace,
      price,
      guests,
      eventPicture,
    });

    res.status(201).json({
      message: "Event successfully",
      data: newEvent,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Event
const getEvent = async (req, res) => {
  try {
    const event = await Event.find().sort({ createdAt: -1 });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Event
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
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
    createEvent,
    getEvent,
    getEventById,
    deleteEvent
};