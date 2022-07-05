import { rest } from "msw";
import { OEndpointType } from "../api/endpoint.type";

export const handlers = [
  rest.post(OEndpointType.login, (_req, res, ctx) => res(ctx.status(200))),
];
