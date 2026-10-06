const Educationevent = require("../model/educationEvent");

// POST - Create Educationevent
const createEducationevent = async (req, res) => {
  try {
    const { title, eventName, eventPlace, price, guests, eventPicture } = req.body;

    const newEducationevent = await Educationevent.create({
      
      title,
      eventName,
      eventPlace,
      price,
      guests,
      eventPicture,
    });

    res.status(201).json({
      message: "Educationevent successfully",
      data: newEducationevent,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Educationevent
const getEducationevent = async (req, res) => {
  try {
    const educationevent = await Educationevent.find().sort({ createdAt: -1 });

    res.status(200).json(educationevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Educationevent
const getEducationeventById = async (req, res) => {
  try {
    const educationevent = await Educationevent.findById(req.params.id);

    if (!educationevent) {
      return res.status(404).json({
        message: "Educationevent not found",
      });
    }

    res.status(200).json(educationevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Educationevent
const deleteEducationevent = async (req, res) => {
  try {
    const educationevent = await Educationevent.findByIdAndDelete(req.params.id);

    if (!educationevent) {
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
    createEducationevent,
    getEducationevent,
    getEducationeventById,
    deleteEducationevent
};