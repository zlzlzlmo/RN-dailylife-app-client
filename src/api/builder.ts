import Api from "./api";
import { EndpointType, MethodType } from "./api.type";

class ApiBuilder<T> {
  public body: object | undefined;

  constructor(
    public readonly method: MethodType,
    public readonly url: EndpointType
  ) {}

  setBody(body: object) {
    this.body = body;
    return this;
  }

  build() {
    return new Api<T>(this);
  }
}

export default ApiBuilder;
