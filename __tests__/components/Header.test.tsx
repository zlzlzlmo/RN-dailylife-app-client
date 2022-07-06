import { render, screen, fireEvent } from "@testing-library/react-native";
import Header from "../../src/components/home/Header";
import renderer from "react-test-renderer";

describe("<Header/>", () => {
  test("renders correctly", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });

  test("show reset icon when input value length is more than one", () => {
    render(<Header />);

    expect(screen.queryByHintText("reset-value")).toBeNull();

    const searchInput = screen.getByPlaceholderText("게시글을 검색해보세요.");

    fireEvent.changeText(searchInput, "test");

    expect(screen.queryByHintText("reset-value")).not.toBeNull();
  });
});
