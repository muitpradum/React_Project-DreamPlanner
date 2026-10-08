const Informalevent = require("../model/informalEvent");

// POST - Create Informalevent
const createInformalevent = async (req, res) => {
  try {
    const { title, eventName, eventPlace, price, guests, eventPicture } = req.body;

    const newInformalevent = await Informalevent.create({
    
      title,
      eventName,
      eventPlace,
      price,
      guests,
      eventPicture,
    });

    res.status(201).json({
      message: "Informalevent successfully",
      data: newInformalevent,
    });
  } catch (error) {
    console.log("Event Error:", error);

    res.status(500).json({
      message: "Failed to event",
      error: error.message,
    });
  }
};

// GET - Get All Informalevent
const getInformalevent = async (req, res) => {
  try {
    const informalevent = await Informalevent.find().sort({ createdAt: -1 });

    res.status(200).json(informalevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// GET - Get Single Informalevent
const getInformaleventById = async (req, res) => {
  try {
    const informalevent = await Informalevent.findById(req.params.id);

    if (!informalevent) {
      return res.status(404).json({
        message: "Informalevent not found",
      });
    }

    res.status(200).json(informalevent);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get event",
      error: error.message,
    });
  }
};

// DELETE - Delete Informalevent
const deleteInformalevent = async (req, res) => {
  try {
    const informalevent = await Informalevent.findByIdAndDelete(req.params.id);

    if (!informalevent) {
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
    createInformalevent,
    getInformalevent,
    getInformaleventById,
    deleteInformalevent
};