import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import LoginScreen from "../../src/components/screens/login-screen/LoginScreen";
import { Alert } from "react-native";
import { server } from "../../src/mocks/server";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});
afterAll(() => server.close());

// * 아이디, 패스워드 인풋 & 로그인 회원가입 버튼 랜더링
// * 둘중 하나라도 비 입력시 팝업
// * 로그인 성공시 메인페이지로 이동
// * 로그인 실패시 팝업 노출
describe("<LoginScreen/>", () => {
  test("initial rendering", () => {
    render(<LoginScreen />);
    screen.getByHintText("logo");
    screen.getByPlaceholderText("아이디를 입력해주세요.");
    screen.getByPlaceholderText("비밀번호를 입력해주세요.");
    screen.getByText("로그인");
    screen.getByText("회원가입");
  });
  test("show popup when there is input without value", () => {
    jest.spyOn(Alert, "alert");
    render(<LoginScreen />);
    fireEvent.changeText(
      screen.getByPlaceholderText("아이디를 입력해주세요."),
      "testid"
    );
    fireEvent.press(screen.getByText("로그인"));
    expect(Alert.alert).toHaveBeenCalled();
  });

  test("login success", async () => {
    jest.spyOn(Alert, "alert");
    render(<LoginScreen />);
    fireEvent.changeText(
      screen.getByPlaceholderText("아이디를 입력해주세요."),
      "testid"
    );

    fireEvent.changeText(
      screen.getByPlaceholderText("비밀번호를 입력해주세요."),
      "testpwd"
    );

    fireEvent.press(screen.getByText("로그인"));
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith("로그인 성공", "로그인 성공");
    });
  });
});
