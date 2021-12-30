const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};



export default function calculatorController(
  state = initialState,
  action: { type: string }
) {
  if (action.type === 'EQUAL') {
    return;
  }
  if (action.type === 'OPERATOR') {
    return;
  }
  if (action.type === 'CLEAR') {
    return;
  }
}
