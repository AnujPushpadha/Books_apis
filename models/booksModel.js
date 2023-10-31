const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Plese give Title"],
    unique: [true, "Title allReady Present add new Title"],
  },
  author: {
    type: String,
    required: [true, "Plese give Author name"],
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model("books", bookSchema);
