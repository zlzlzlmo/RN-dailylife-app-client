import { useState } from "react";

export interface ISignupForm {
  userId: string;
  nickName: string;
  password: string;
  checkPassword: string;
}

const useSignupForm = () => {
  const [signupForm, setSignupForm] = useState<ISignupForm>({
    userId: "",
    nickName: "",
    password: "",
    checkPassword: "",
  });

  const handleSignUpInfo = (name: keyof ISignupForm, text: string) => {
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
    handleSignUpInfo("checkPassword", password);

  return {
    changeUserId,
    changePassword,
    changeNickName,
    changeCheckPassword,
    signupForm,
  };
};

export default useSignupForm;
