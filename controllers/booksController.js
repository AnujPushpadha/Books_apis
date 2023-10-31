const model = require("../models/booksModel");

const addBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await model.create({
      title,
      author,
      summary,
    });
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await model.find();
    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const getBookBy_Id = async (req, res) => {
  try {
    // console.log(req.params);
    const book = await model.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await model.findById(req.params.id);
    // console.log(book);
    if (book === null) {
      res.status(404).json({
        message: "book not present",
      });
      return;
    }
    deleted_Book = await model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

const update_Book = async (req, res) => {
  try {
    const book = await model.findById(req.params.id);
    // console.log(book);
    if (book === null) {
      res.status(404).json({
        message: "book not present",
      });
      return;
    }
    const updatedBook = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: updatedBook,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
module.exports = { addBook, getBooks, getBookBy_Id, deleteBook, update_Book };
