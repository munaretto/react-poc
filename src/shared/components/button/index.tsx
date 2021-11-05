import React from "react";
import { ButtonProps } from "../../interfaces/button.props.interface";
import { CustomButton } from "./styles";

export default class Button extends React.Component<ButtonProps, {}> {
  render() {
    return <CustomButton {...this.props} />;
  }
}