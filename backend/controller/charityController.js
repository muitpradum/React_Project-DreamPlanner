const Charityevent = require("../model/charityevent");

// POST - Create Charityevent
const createCharityevent = async (req, res) => {
  try {
    const { title, eventName, eventPlace,eventCity, eventDate, guests, eventPicture } = req.body;

    const newCharityevent = await Charityevent.create({
    
      title,
      eventName,
      eventPlace,
      eventCity,
      eventDate,
      guests,
      eventPicture,
    });

    res.status(201).json({
      message: "Charityevent successfully",
      data: newCharityevent,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Charityevent
const getCharityevent = async (req, res) => {
  try {
    const charityevent = await Charityevent.find().sort({ createdAt: -1 });

    res.status(200).json(charityevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Charityevent
const getCharityeventById = async (req, res) => {
  try {
    const charityevent = await Charityevent.findById(req.params.id);

    if (!charityevent) {
      return res.status(404).json({
        message: "Informalevent not found",
      });
    }

    res.status(200).json(charityevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Charityevent
const deleteCharityevent = async (req, res) => {
  try {
    const charityevent = await Charityevent.findByIdAndDelete(req.params.id);

    if (!charityevent) {
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
    createCharityevent,
    getCharityevent,
    getCharityeventById,
    deleteCharityevent
};