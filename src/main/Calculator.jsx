import React, { Component } from "react";

import "./Calculator.css";

import CalculatorConsts from "../common/consts/calculator.consts";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  valores: [0, 0],
  current: 0,
};
export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    console.log("clear");
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log("operation");
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = { ...this.state.values };

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    const currentValue = clearDisplay ? "" : this.state.displayValue;

    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = { ...this.state.values };
      values[i] = newValue;

      this.setState({ values });
    }
  }

  calcular(label, classe) {
    if (label === "AC") return this.clearMemory();
    else if (classe === "operation" || classe === "col4") return this.setOperation(label);
    else return this.addDigit(label);
  }

  render() {
    const { buttons } = CalculatorConsts();

    const RenderButtons = () =>
      buttons.map((item, index) => {
        return (
          <Button
            key={index}
            label={item.label}
            style={item.class}
            onClick={() => this.calcular(item.label, item.class)}
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
