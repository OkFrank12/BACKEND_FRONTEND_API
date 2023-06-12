import express, { Router } from "express";
import {
  createWeather,
  deleteWeather,
  getSingleWeather,
  getWeather,
  updateWeather,
} from "../controller/weatherController";

const router: Router = express.Router();

router.route("/").get(getWeather);
router.route("/create").post(createWeather);
router.route("/:id").get(getSingleWeather);
router.route("/update/:id").patch(updateWeather);
router.route("/delete/:id").delete(deleteWeather);

export default router;
