const Socialevent = require("../model/socialEvent");

// POST - Create Socialevent
const createSocialevent = async (req, res) => {
  try {
    const { title, eventName, eventPlace, price, guests, eventPicture } = req.body;

    const newSocialevent = await Socialevent.create({
      
      title,
      eventName,
      eventPlace,
      price,
      guests,
      eventPicture,
    });

    res.status(201).json({
      message: "Socialevent successfully",
      data: newSocialevent,
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
const getSocialevent = async (req, res) => {
  try {
    const socialevent = await Socialevent.find().sort({ createdAt: -1 });

    res.status(200).json(socialevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Socialevent
const getSocialeventById = async (req, res) => {
  try {
    const socialevent = await Socialevent.findById(req.params.id);

    if (!socialevent) {
      return res.status(404).json({
        message: "Socialevent not found",
      });
    }

    res.status(200).json(socialevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Socialevent
const deleteSocialevent = async (req, res) => {
  try {
    const socialevent = await Socialevent.findByIdAndDelete(req.params.id);

    if (!socialevent) {
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
    createSocialevent,
    getSocialevent,
    getSocialeventById,
    deleteSocialevent
};