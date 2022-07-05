import { render, screen, fireEvent } from "@testing-library/react-native";
import LoginScreen from "../../src/components/screens/login-screen/LoginScreen";

// * 아이디, 패스워드 인풋 & 로그인 회원가입 버튼 랜더링
// * 둘중 하나라도 비 입력시 팝업
// * 로그인 성공시 메인페이지로 이동
// * 로그인 실패시 팝업 노출
describe("<LoginScreen/>", () => {
  test("initial rendering", () => {
    render(<LoginScreen />);
    screen.getByPlaceholderText("아이디를 입력해주세요.");
    screen.getByPlaceholderText("비밀번호를 입력해주세요.");
    screen.getByText("로그인");
    screen.getByText("회원가입");
  });
});
