import { useState } from "react";
import { LoginInfoType, SignupFormType } from "../../../../api/user/userApi";

const useSignupForm = () => {
  const [signupForm, setSignupForm] = useState<SignupFormType>({
    userId: "",
    nickName: "",
    password: "",
    repeatPassword: "",
  });

  const handleSignUpInfo = (name: keyof SignupFormType, text: string) => {
    setSignupForm({
      ...signupForm,
      [name]: text,
    });
  };

  const changeUserId = (userId: string): void =>
    handleSignUpInfo("userId", userId);
  const changeNickName = (nickName: string): void =>
    handleSignUpInfo("nickName", nickName);
  const changePassword = (password: string): void =>
    handleSignUpInfo("password", password);
  const changeCheckPassword = (password: string): void =>
    handleSignUpInfo("repeatPassword", password);

  return {
    changeUserId,
    changePassword,
    changeNickName,
    changeCheckPassword,
    signupForm,
  };
};

export default useSignupForm;
