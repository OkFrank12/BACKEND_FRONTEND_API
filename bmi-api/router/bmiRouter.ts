import express, { Router } from "express";
import {
  createBMI,
  deleteBMI,
  getBMI,
  getSingleBMI,
  updateBMI,
} from "../controller/bmiController";

const router: Router = express.Router();

router.route("/").get(getBMI);
router.route("/create").post(createBMI);
router.route("/:id").get(getSingleBMI);
router.route("/update/:id").patch(updateBMI);
router.route("/delete/:id").delete(deleteBMI);

export default router;
