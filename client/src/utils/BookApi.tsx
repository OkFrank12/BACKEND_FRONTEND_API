import axios from "axios";

const url: string = `http://localhost:4000/api/book`;

export const getBookApi = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createBookApi = async (data: any) => {
  try {
    return await axios.get(`${url}/create`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBookApi = async (id: any, data: any) => {
  try {
    return await axios.get(`${url}/update/${id}`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
