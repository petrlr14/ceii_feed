import axios from "axios";
import Strings from "../utils/strings";
export const APIInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const AUTHORIZATION = { Authorization: `Bearer ${localStorage.getItem(Strings.TOKEN)}` };
