import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaTableList } from "react-icons/fa6";
import { BiArchive } from "react-icons/bi";

import Container from "./style";
import AsideLink from "../AsideLink/AsideLink";
import Divider from "../Divider/Divider";

const Aside = () => {
  return (
    <Container>
      <Divider />

      <AsideLink label="Dashboard" to="/" icon={<AiFillDashboard />} />
      <AsideLink label="Licitações" to="/bidding" icon={<FaTableList />} />
      <AsideLink label="Cadastro" to="/register" icon={<BiArchive />} />
    </Container>
  );
};

export default Aside;
