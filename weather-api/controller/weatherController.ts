import { Request, Response } from "express";
import crypto from "crypto";
import { iWeather } from "../utils/interface";
const weatherBase: iWeather[] = [];
import axios from "axios"

export const getWeather = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Weather forcast successfully",
      data: weatherBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to forcast weather",
    });
  }
};

export const createWeather = async (req: Request, res: Response) => {
  try {
    const { location, temperature, pressure, humidity, wind } = req.body;
    const ID: string = crypto.randomUUID();
    // const url = `http://api.weatherapi.com/v1/current.json?key=67533b357bb14164adc202331230506&q=${location}&aqi=yes
    // `;

    // const data = await axios.get(url).then((res) => {
    //   return res.data;
    // });
    const weatherObj: any = {
      id: ID,
      location,
      temperature,
      pressure,
      humidity,
      wind,
    };
    weatherBase.push(weatherObj);

    return res.status(201).json({
      message: "Created Weather Forcast successfully",
      data: weatherObj,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create weather forcast",
    });
  }
};

export const getSingleWeather = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleForcast = weatherBase.filter((el: iWeather) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "Viewed Single Forcast Successfully",
      data: singleForcast,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to make single Weather forcast",
    });
  }
};

export const updateWeather = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { location, temperature, pressure, humidity, wind } = req.body;
    // const url = `http://api.weatherapi.com/v1/current.json?key=67533b357bb14164adc202331230506&q=${location}&aqi=yes
    // `;
    // const data = await axios.get(url).then((res) => {
    //   return res.data;
    // });

    const updates = parseInt(id) - 1;

    weatherBase[updates].location = location;
    weatherBase[updates].temperature = temperature;
    weatherBase[updates].pressure = pressure;
    weatherBase[updates].humidity = humidity;
    weatherBase[updates].wind = wind;

    return res.status(201).json({
      message: "Updated weather forcast successfully",
      data: weatherBase,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update weather forcast",
    });
  }
};

export const deleteWeather = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteForcast = weatherBase.filter((el: iWeather) => {
      return el?.id !== id;
    });

    return res.status(201).json({
      message: "Deleted weather forcast successfully",
      data: deleteForcast,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete weather forcast",
    });
  }
};
