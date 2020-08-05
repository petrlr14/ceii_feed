import axios from "axios";

export const APIInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});
