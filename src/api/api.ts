import { AxiosInstance } from "axios";
import { instance } from "./axios/instance";
import { EndpointType } from "./endpoint.type";

abstract class AbstractApi {
  constructor(private readonly instance: AxiosInstance = instance) {}
  protected async get(url: EndpointType) {
    const result = await this.instance.get(url);
    return result.data;
  }

  protected async post(url: EndpointType, body: object) {
    const result = await this.instance.post(url, body);
    return result.data;
  }
}

export default AbstractApi;
