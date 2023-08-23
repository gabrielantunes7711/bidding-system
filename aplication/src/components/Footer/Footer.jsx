import React from "react";
import Container from "./style";

const Footer = () => {
  return (
    <Container>
      <span>@{new Date().getFullYear()}, Desenvolvido por Gabriel Antunes</span>
    </Container>
  );
};

export default Footer;
