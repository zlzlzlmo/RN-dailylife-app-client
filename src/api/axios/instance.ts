import axios from "axios";
import { API_URL } from "@env";
import { interceptRequest } from "./interceptor/requestInterceptor";
import { interceptResponse } from "./interceptor/responseInterceptor";

const axiosSetting = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
};
export const instance = axios.create(axiosSetting);

interceptRequest();
interceptResponse();
