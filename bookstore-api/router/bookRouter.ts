import express, { Router } from "express";
import {
  createBooks,
  deleteBook,
  getBooks,
  singleBook,
  updateBook,
} from "../controller/bookController";

const router: Router = express.Router();

router.route("/").get(getBooks);
router.route("/create").post(createBooks);
router.route("/single/:id").get(singleBook);
router.route("/delete/:id").delete(deleteBook);
router.route("/update/:id").patch(updateBook);

export default router;
