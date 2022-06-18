import { AxiosRequestHeaders, AxiosResponse } from "axios";
import UserStorage from "../../util/storage/user-storage/userStorage";
import { OEndpointType } from "../api.type";
import { instance } from "../instance";

const validateRefreshToken = () =>
  instance.post(OEndpointType.refresh, {
    refreshToken: new UserStorage().getRefreshToken(),
  });

export function interceptResponse() {
  instance.interceptors.response.use(handleAfterSuccess(), handleAfterFail());

  function handleAfterSuccess():
    | ((
        value: AxiosResponse<any, any>
      ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)
    | undefined {
    return (res: AxiosResponse<any, any>) => {
      const { accessToken, refreshToken } = res.data;
      new UserStorage().setAllToken({ accessToken, refreshToken });
      return res;
    };
  }

  function handleAfterFail(): ((error: any) => any) | undefined {
    return async (error) => {
      const originalConfig = error.config;

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const res = await validateRefreshToken();
          const { accessToken, refreshToken } = res.data;
          setAuthorization(accessToken, refreshToken);
          return await instance(originalConfig);
        } catch (_error: any) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
    };

    function setAuthorization(accessToken: any, refreshToken: any) {
      new UserStorage().setAllToken({ accessToken, refreshToken });
      setResponseConfigHeader(instance.defaults.headers.common, accessToken);

      function setResponseConfigHeader(
        header: AxiosRequestHeaders,
        token: string
      ) {
        header.Authorization = `Bearer ${token}`;
      }
    }
  }
}
