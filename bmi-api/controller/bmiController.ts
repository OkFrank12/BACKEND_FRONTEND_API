import { Request, Response } from "express";
import crypto from "crypto";
import { iBmi } from "../utils/interface";

const bmiBase: iBmi[] = [];

export const getBMI = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "BMI status enabled",
      data: bmiBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "No BMI status",
    });
  }
};

export const createBMI = (req: Request, res: Response) => {
  try {
    const { weight, height, sex } = req.body;
    const ID: string = crypto.randomBytes(16).toString("hex");
    const bmi = weight / (height * height);
    const bmiStatus =
      bmi < 18.5
        ? "Underweight"
        : bmi >= 18.5 && bmi < 25
        ? "Normal weight"
        : bmi >= 25 && bmi < 30
        ? "Overweight"
        : "Obese";

    const newBMI: any = {
      weight,
      height,
      sex,
      id: ID,
      bmi: bmi,
      bmiStatus: bmiStatus,
    };
    bmiBase.push(newBMI);

    return res.status(201).json({
      message: "BMI status successfully created",
      data: newBMI,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create BMI status",
    });
  }
};

export const getSingleBMI = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleBMI = bmiBase.filter((el: iBmi) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "View Single BMI status",
      data: singleBMI,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get single BMI status",
    });
  }
};

export const updateBMI = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const { weight, height, sex } = req.body;

    const updateBMI = parseInt(id) - 1;

    bmiBase[updateBMI].weight = weight;
    bmiBase[updateBMI].sex = sex;
    bmiBase[updateBMI].height = height;


    return res.status(201).json({
      message: "Updated BMI status successfully",
      data: bmiBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update BMI status",
    });
  }
};

export const deleteBMI = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteBMI = bmiBase.filter((el: iBmi) => {
      return el?.id !== id;
    });

    return res.status(201).json({
      message: "Deleted BMI status successfully",
      data: deleteBMI,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete BMI status",
    });
  }
};
