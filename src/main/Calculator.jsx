import React, { Component } from "react";

import "./Calculator.css";

import CalculatorConsts from "../common/consts/calculator.consts";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

export default class Calculator extends Component {
  setNumber(d) {
    console.log(d)
  }

  setOperator(op) {
    console.log(op)
  }

  clearMemory() {
    
  }

  render() {

    const { buttons } = CalculatorConsts();

    const RenderButtons = () =>
      buttons.map((item) => {
        return <Button label={item} />;
      });

    return (
      <div className='calculator'>
        <Display value={100} />
        <RenderButtons />
      </div>
    );
  }
}
