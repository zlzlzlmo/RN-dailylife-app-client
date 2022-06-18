import { EndpointType, MethodType } from "./api.type";

class ApiBuilder {
  public body: object | undefined;

  constructor(
    public readonly method: MethodType,
    public readonly url: EndpointType
  ) {}

  setBody(body: object) {
    this.body = body;
    return this;
  }
}

export default ApiBuilder;
