import React from "react";
import Container from "./style";

const BtnPrimary = ({ label, ...props }) => {
  return <Container {...props}>{label}</Container>;
};

export default BtnPrimary;
