import React from "react";
import Container from "./style";

const Input = ({ label, id, setValue, icon, ...props }) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        {icon}
        <input
          type="text"
          name={id}
          id={id}
          onChange={({ target }) => {
            setValue((prevValue) => ({ ...prevValue, [id]: target.value }));
          }}
          {...props}
        />
      </div>
    </Container>
  );
};

export default Input;
