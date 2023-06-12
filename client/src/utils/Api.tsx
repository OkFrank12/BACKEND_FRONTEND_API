import axios from "axios";

const url: string = `http://localhost:3500/api/bmi`;

export const getBmiCalculator = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createBmiCalculator = async (data: any) => {
  try {
    return await axios.get(`${url}/create`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBmiCalculator = async (id: any, data: any) => {
  try {
    return await axios.get(`${url}/update/${id}`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
