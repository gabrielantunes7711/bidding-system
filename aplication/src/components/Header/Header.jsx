import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { GrSystem } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import Container from "./style";
import Input from "../Form/Input/Input";

const Header = () => {
  return (
    <Container>
      <h1>
        <GrSystem /> Bidding System
      </h1>

      <Breadcrumb />

      <form>
        <Input
          type="search"
          placeholder="Pesquise aqui..."
          icon={<LuSearch />}
        />
      </form>
    </Container>
  );
};

export default Header;
