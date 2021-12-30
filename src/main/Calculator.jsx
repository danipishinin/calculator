import React, { Component } from "react";

import "./Calculator.css";

import CalculatorConsts from "../common/consts/calculator.consts";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};
export default class Calculator extends Component {
  state = { ...initialState };
  render() {
    const { buttons } = CalculatorConsts();

    const RenderButtons = () =>
      buttons.map((item, index) => {
        return (
          <Button key={item.index} label={item.label} style={item.class} />
        );
      });

    return (
      <div className='calculator'>
        <Display value={this.displayValue} />
        <RenderButtons />
      </div>
    );
  }
}
