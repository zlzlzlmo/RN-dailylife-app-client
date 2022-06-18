export type MethodType = "get" | "post";

export const OEndpointType = {
  login: "/auth/login",
  signup: "/auth/signup",
  logout: "/auth/logout",
  refresh: "/auth/refresh",
} as const;

export type EndpointType = typeof OEndpointType[keyof typeof OEndpointType];
