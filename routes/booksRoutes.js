const express = require("express");

const {
  test,

  addBook,
  getBooks,
  getBookBy_Id,
  deleteBook,
  update_Book,
} = require("../controllers/booksController");
const router = express.Router();
router.route("/").get(getBooks).post(addBook);
router.route("/:id").get(getBookBy_Id).delete(deleteBook).put(update_Book);
module.exports = router;
