import { render, screen } from "@testing-library/react-native";
import Header from "../../src/components/home/Header";
import renderer from "react-test-renderer";

describe("<Header/>", () => {
  test("renders correctly", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
