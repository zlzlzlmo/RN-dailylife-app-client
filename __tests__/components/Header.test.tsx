import { render } from "@testing-library/react-native";
import Header from "../../src/components/home/Header";
describe("<Header/>", () => {
  test("ui", () => {
    render(<Header />);
  });
});
