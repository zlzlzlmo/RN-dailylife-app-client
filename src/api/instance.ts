import axios from "axios";
import { API_URL } from "@env";

const axiosSetting = {
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
};
export const instance = axios.create(axiosSetting);
