const Bookings = require ("../model/userBookings");

// POST - Create Message
const createBookings = async (req, res) => {
  try {
    const { EventId, name, email, phone, title, eventName, price, guests, date } = req.body;

    const newBookings = await Bookings.create({
      EventId,
      name,
      email,
      phone,
      eventName,
      title,
      price,
      guests,
      date,
    });

    res.status(201).json({
      message: "Bookings successfully",
      data: newBookings,
    });
  } catch (error) {
    console.log("Bookings Error:", error);

    res.status(500).json({
      message: "Failed to booking",
      error: error.message,
    });
  }
};

// GET - Get All Messages
const getBookings = async (req, res) => {
  try {
    const bookings = await Bookings.find().sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get booking",
      error: error.message,
    });
  }
};

// GET - Get Single Message
const getBookingsById = async (req, res) => {
  try {
    const booking = await Bookings.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get booking",
      error: error.message,
    });
  }
};

// DELETE - Delete Message
const deleteBookings = async (req, res) => {
  try {
    const booking = await Bookings.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete booking",
      error: error.message,
    });
  }
};
module.exports = {
    createBookings,
    getBookings,
    getBookingsById,
    deleteBookings
};