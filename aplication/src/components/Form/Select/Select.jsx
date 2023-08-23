import { React, forwardRef } from "react";
import ReactSelect from "react-select";
import Container from "./style";

export const Select = ({ options, label, id, setValue, ...props }, ref) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <ReactSelect
        options={options}
        id={id}
        placeholder="Selecione"
        onChange={(selectedOptions) => {
          if (selectedOptions.length === undefined) {
            setValue((prevValue) => ({
              ...prevValue,
              [id]: selectedOptions.value,
            }));
          } else if (selectedOptions.length === 0) {
            setValue((prevValue) => ({
              ...prevValue,
              [id]: "",
            }));
          } else {
            let selectValue = [];

            selectedOptions.map(({ value }) => {
              selectValue.push(value);
            });

            setValue((prevValue) => ({ ...prevValue, [id]: selectValue }));
          }
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            minHeight: "5rem",
            borderRadius: "1.5rem",
            borderColor: "var(--border-color)",
            boxShadow: state.isFocused
              ? "0 0 4px rgba(79, 209, 197, 0.5)"
              : "none",

            "&:hover": {
              borderColor: "var(--border-color)",
            },
            "&:focus": {
              borderColor: "var(--border-color)",
            },
          }),
        }}
        ref={ref}
        {...props}
      />
    </Container>
  );
};

export default forwardRef(Select);
