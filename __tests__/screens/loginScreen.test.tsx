import { render, screen, fireEvent } from "@testing-library/react-native";
import LoginScreen from "../../src/components/screens/login-screen/LoginScreen";

describe("<LoginScreen/>", () => {
  test("initial rendering", () => {
    render(<LoginScreen />);
  });
});
