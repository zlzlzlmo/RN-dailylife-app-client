import { AxiosInstance } from "axios";
import { instance } from "./axios/instance";
import { EndpointType } from "./endpoint.type";

abstract class AbstractApi {
  constructor(private readonly instance: AxiosInstance = instance) {}
  protected async get(url: EndpointType) {
    try {
      const result = await this.instance.get(url);
      return result.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  protected async post(url: EndpointType, body: object) {
    try {
      const result = await this.instance.post(url, body);
      return result.data;
    } catch (error: any) {
      console.log("error :", error);
      throw new Error(error);
    }
  }
}

export default AbstractApi;
