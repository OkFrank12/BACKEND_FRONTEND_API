import axios from "axios";

const url: string = `http://localhost:4500/api/weather`;

export const getWeatherForcast = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createWeatherForcast = async (data: any) => {
  try {
    return await axios.get(`${url}/create`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateWeatherForcast = async (id: any, data: any) => {
  try {
    return await axios.get(`${url}/update/${id}`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
