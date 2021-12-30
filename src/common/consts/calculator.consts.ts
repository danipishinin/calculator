const CalculatorConsts = () => {
  interface ButtonsProps {
    label: string;
    class: string;
  }

  const buttons: Array<ButtonsProps> = [
    {
      label: "+",
      class: "operation",
    },
    {
      label: "-",
      class: "operation",
    },
    {
      label: "x",
      class: "operation",
    },
    {
      label: "÷",
      class: "operation",
    },
    {
      label: "7",
      class: "",
    },
    {
      label: "8",
      class: "",
    },
    {
      label: "9",
      class: "",
    },
    {
      label: "=",
      class: "col4",
    },

    {
      label: "4",
      class: "",
    },
    {
      label: "5",
      class: "",
    },
    {
      label: "6",
      class: "",
    },

    {
      label: "1",
      class: "",
    },
    {
      label: "2",
      class: "",
    },
    {
      label: "3",
      class: "",
    },

    {
      label: "0",
      class: "",
    },
    {
      label: ".",
      class: "",
    },
    {
      label: "AC",
      class: "",
    },
  ];

  return {
    buttons,
  };
};

export default CalculatorConsts;
