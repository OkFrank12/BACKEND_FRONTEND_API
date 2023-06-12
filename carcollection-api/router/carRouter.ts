import express, { Router } from "express";
import {
  createCars,
  deleteCar,
  getCars,
  singleCar,
  updateCars,
} from "../controller/carController";

const router: Router = express.Router();

router.route("/").get(getCars);
router.route("/create").post(createCars);
router.route("/single/:id").get(singleCar);
router.route("/delete/:id").delete(deleteCar);
router.route("/update/:id").patch(updateCars);

export default router;
