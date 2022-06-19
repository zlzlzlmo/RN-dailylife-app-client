import React, { Component } from "react";
import { GestureResponderEvent } from "react-native";
import BasicButton from "./BasicButton";
import SubButton from "./SubButton";

const OButtonType = {
  basic: "BASIC",
  sub: "SUB",
} as const;

type ButtonType = typeof OButtonType[keyof typeof OButtonType];

export interface ButtonProps {
  buttonType: ButtonType;
  title: string;
  color?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  marginBottom?: number;
}

class Button extends Component<ButtonProps> {
  renderElement(props: ButtonProps) {
    switch (props.buttonType) {
      case OButtonType.basic:
        return <BasicButton {...props} />;
      case OButtonType.sub:
        return <SubButton {...props} />;
      default:
        console.error("버튼 prop 확인");
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default Button;
