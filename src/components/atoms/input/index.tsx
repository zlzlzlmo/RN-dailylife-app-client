import React, { Component } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import BasicInput from "./BasicInput";

const OInputType = {
  basic: "BASIC",
} as const;

type InputType = typeof OInputType[keyof typeof OInputType];

export interface InputProps {
  inputType: InputType;
  placeholder?: string;
  secureTextEntry?: boolean;
  height?: string;
  marginVertical?: number;
  name?: string;
  onChangeText?: (text: string) => void;
}

class Input extends Component<InputProps> {
  renderElement(props: InputProps) {
    switch (props.inputType) {
      case OInputType.basic:
        return <BasicInput {...props} />;
      default:
        console.error("Input Props 확인 필요");
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default Input;
