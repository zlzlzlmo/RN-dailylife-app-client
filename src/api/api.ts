import { AxiosRequestConfig } from "axios";
import { EndpointType, MethodType } from "./api.type";
import ApiBuilder from "./builder";
import { instance } from "./instance";

class Api {
  private method: MethodType;

  private url: EndpointType;

  private body: object | undefined;

  private _authorization: string | undefined;

  get authorization() {
    return this._authorization;
  }

  constructor(builder: ApiBuilder) {
    this.method = builder.method;
    this.url = builder.url;
    this.body = builder.body;
  }

  async fetch() {
    try {
      const result = await instance({
        method: this.method,
        url: this.url,
        data: this.body,
      });

      this.setAuthorization(result.config);
      return result.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  private setAuthorization(config: AxiosRequestConfig<any>) {
    this._authorization = config.headers?.Authorization?.toString();
  }
}

export default Api;
