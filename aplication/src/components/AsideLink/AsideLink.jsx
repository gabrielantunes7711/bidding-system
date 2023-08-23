import React from "react";
import Container from "./style";

const AsideLink = ({ label, to, icon }) => {
  return (
    <Container to={to}>
      <span>{icon}</span>
      {label}
    </Container>
  );
};

export default AsideLink;
