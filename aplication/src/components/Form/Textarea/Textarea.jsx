import React from "react";
import Container from "./style";

const Textarea = ({ label, id, setValue, icon, ...props }) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        type="text"
        name={id}
        id={id}
        onChange={({ target }) => {
          setValue((prevValue) => ({ ...prevValue, [id]: target.value }));
        }}
        {...props}
      ></textarea>
    </Container>
  );
};

export default Textarea;
