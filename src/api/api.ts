import { AxiosRequestConfig } from "axios";
import { EndpointType, MethodType } from "./api.type";
import ApiBuilder from "./builder";
import { instance } from "./axios/instance";

interface IResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
}

class Api<T> {
  private method: MethodType;

  private url: EndpointType;

  private body: object | undefined;

  private _authorization: string | undefined;

  get authorization() {
    return this._authorization;
  }

  constructor(builder: ApiBuilder<T>) {
    this.method = builder.method;
    this.url = builder.url;
    this.body = builder.body;
  }

  async fetch(): Promise<IResponse<T>> {
    try {
      const result = await instance({
        method: this.method,
        url: this.url,
        data: this.body,
      });

      this.setAuthorization(result.config);
      return { statusCode: result.status, data: result.data };
    } catch (error: any) {
      return error;
    }
  }

  private setAuthorization(config: AxiosRequestConfig<any>) {
    this._authorization = config.headers?.Authorization?.toString();
  }
}

export default Api;
