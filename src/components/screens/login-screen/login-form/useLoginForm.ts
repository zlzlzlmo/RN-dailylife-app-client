import { useState } from "react";
import UserApi, { LoginInfoType } from "../../../../api/user/userApi";
import usePopup from "../../../../hooks/usePopup/usePopup";

const useLoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    userId: "",
    password: "",
  });

  const handleLoginInfo = (name: keyof LoginInfoType, text: string) => {
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
