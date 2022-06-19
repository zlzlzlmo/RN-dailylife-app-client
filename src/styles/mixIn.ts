import { Platform, StatusBar } from "react-native";
import { css } from "styled-components/native";

export const rootContainerCss = css`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  padding-left: 20;
  padding-right: 20;
  align-items: center;
`;
