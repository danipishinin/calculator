import React, { Component } from "react";

import "./Calculator.css";

import CalculatorConsts from "../common/consts/calculator.consts";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
  displayValue: "0",
};
export default class Calculator extends Component {
  state = { ...initialState };

  clear() {
    console.log("clear");
    this.setState({ initialState });
  }

  calcular(label) {
    console.log('CALCULAR')
  }
  render() {
    const { buttons } = CalculatorConsts();

    const RenderButtons = () =>
      buttons.map((item, index) => {
        console.log(item.class, item.label);
        return (
          <Button
            key={index}
            label={item.label}
            style={item.class}
            onClick={() => this.calcular(item.label)}
          />
        );
      });

    return (
      <div className='calculator'>
        <Display value={this.state.displayValue} />
        <RenderButtons />
      </div>
    );
  }
}
