import React, { Component } from "react";
import BasicButton from "./BasicButton";

const OButtonType = {
  basic: "BASIC",
} as const;

type ButtonType = typeof OButtonType[keyof typeof OButtonType];

export interface ButtonProps {
  buttonType: ButtonType;
  title: string;
  color?: string;
}

class Button extends Component<ButtonProps> {
  renderElement(props: ButtonProps) {
    switch (props.buttonType) {
      case OButtonType.basic:
        return <BasicButton {...props} />;
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default Button;
