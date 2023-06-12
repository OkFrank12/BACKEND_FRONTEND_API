import { Request, Response } from "express";
import crypto from "crypto";
import { iCars } from "../utils/interface";

const CarData: iCars[] = [];

export const getCars = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Getting Car collection successfully",
      data: CarData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to get car collections",
    });
  }
};

export const createCars = (req: Request, res: Response) => {
  try {
    const { color, model, price } = req.body;
    const ID: string = crypto.randomBytes(16).toString("hex");

    const newCar = {
      id: ID,
      color,
      model,
      price,
    };

    CarData.push(newCar);

    return res.status(201).json({
      message: "Created car collection successfully",
      data: newCar,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to create car collection",
    });
  }
};

export const singleCar = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleCar = CarData.filter((el: iCars) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "Get single car collection successfully",
      data: singleCar,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to get single car collection",
    });
  }
};

export const deleteCar = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteCar = CarData.filter((el: iCars) => {
      return el?.id !== id;
    });

    return res.status(201).json({
      message: "Deleted car collection successfully",
      data: deleteCar,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to delete car collection",
    });
  }
};

export const updateCars = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { model, price, color } = req.body;

    const updates = parseInt(id) - 1;

    CarData[updates].color = color;
    CarData[updates].model = model;
    CarData[updates].price = price;

    return res.status(201).json({
      message: "Updated car collection successfully",
      data: CarData,
    });
  } catch (error) {
    return res.status(404).json({
      message: "unable to update car collection",
    });
  }
};
