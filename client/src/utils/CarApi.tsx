import axios from "axios";

const url: string = `http://localhost:3200/api/cars`;

export const getCarApi = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createCarApi = async (data: any) => {
  try {
    return await axios.get(`${url}/create`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCarApi = async (id: any, data: any) => {
  try {
    return await axios.get(`${url}/update/${id}`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
