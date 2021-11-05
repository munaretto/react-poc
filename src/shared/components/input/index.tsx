import React from "react";
import { InputProps } from "../../interfaces/inputProps.interface";
import { InputField } from "./styles";

export default class Input extends React.Component<InputProps, {}> {
  render() {
    return (
      <section className="input-wrapper">
        <label>{this.props.label}</label>
        <InputField {...this.props} />
      </section>
    );
  }
}
