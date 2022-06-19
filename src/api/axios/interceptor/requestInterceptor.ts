import { AxiosRequestConfig } from "axios";
import UserStorage from "../../../util/storage/user-storage/userStorage";
import { instance } from "../instance";

export function interceptRequest(): void {
  instance.interceptors.request.use(handleAfterSuccess(), handleAfterFail());

  function handleAfterSuccess():
    | ((
        value: AxiosRequestConfig<any>
      ) => AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>>)
    | undefined {
    return (config: AxiosRequestConfig<any>): AxiosRequestConfig<any> => {
      const token = new UserStorage().getAccessToken();

      if (!token) {
        return config;
      }
      return setRequestConfigHeader(token, config);
    };

    function setRequestConfigHeader(
      token: string,
      config: AxiosRequestConfig<any>
    ): AxiosRequestConfig<any> {
      const newConfig = { ...config };

      if (!newConfig.headers) {
        newConfig.headers = {
          "Content-Type": "application/json",
        };
      }

      newConfig.headers.Authorization = `Bearer ${token}`;
      return newConfig;
    }
  }

  function handleAfterFail(): ((error: any) => any) | undefined {
    return (error) => Promise.reject(error);
  }
}
