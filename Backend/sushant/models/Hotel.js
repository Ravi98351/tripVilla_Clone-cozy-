const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,

  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },

  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
    default: false,
  },
});


