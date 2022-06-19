import { useState } from "react";
import UserApi from "../../../../api/user/userApi";
import usePopup from "../../../../hooks/usePopup/usePopup";

export interface ILoginInfo {
  userId: string;
  password: string;
}

const useLoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    userId: "",
    password: "",
  });

  const handleLoginInfo = (name: keyof ILoginInfo, text: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: text,
    });
  };

  const changeUserId = (text: string): void => handleLoginInfo("userId", text);
  const changePassword = (password: string): void =>
    handleLoginInfo("password", password);

  return { changePassword, changeUserId, loginInfo };
};

export default useLoginForm;
