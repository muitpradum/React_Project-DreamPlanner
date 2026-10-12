const Homeevent = require("../model/home");

// POST - Create Homeevent
const createHomeevent = async (req, res) => {
  try {
    const { title, eventName, eventPlace, price, date, eventPicture } = req.body;

    const newHomeevent = await Homeevent.create({
    
      title,
      eventName,
      eventPlace,
      price,
      date,
      eventPicture,
    });

    res.status(201).json({
      message: "Homeevent successfully",
      data: newHomeevent,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Homeevent
const getHomeevent = async (req, res) => {
  try {
    const homeevent = await Homeevent.find().sort({ createdAt: -1 });

    res.status(200).json(homeevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Homeevent
const getHomeeventById = async (req, res) => {
  try {
    const homeevent = await Homeevent.findById(req.params.id);

    if (!homeevent) {
      return res.status(404).json({
        message: "Homeevent not found",
      });
    }

    res.status(200).json(homeevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Homeevent
const deleteHomeevent = async (req, res) => {
  try {
    const homeevent = await Homeevent.findByIdAndDelete(req.params.id);

    if (!homeevent) {
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
    createHomeevent,
    getHomeevent,
    getHomeeventById,
    deleteHomeevent
};