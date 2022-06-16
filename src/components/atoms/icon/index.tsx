import React, { Component } from "react";
import styled from "styled-components/native";
import Logo from "../../../assets/icons/logo.png";

const OIconType = {
  logo: "LOGO",
} as const;

type IconType = typeof OIconType[keyof typeof OIconType];

interface IconProps {
  iconType: IconType;
}

const IconStyle = styled.Image`
  width: 200;
  height: 200;
  object-fit: contain;
`;

class Icon extends Component<IconProps, {}> {
  renderElement(props: IconProps) {
    switch (props.iconType) {
      case OIconType.logo:
        return <IconStyle source={Logo} />;
      default:
        console.error("아이콘 props 확인");
    }
  }
  render() {
    return this.renderElement(this.props);
  }
}

export default Icon;
