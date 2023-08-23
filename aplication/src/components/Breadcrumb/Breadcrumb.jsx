import React from "react";
import Container from "./style";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink = +`/${crumb}`;

      return (
        <>
          /
          <NavLink to={currentLink} key={index}>
            {crumb}
          </NavLink>
        </>
      );
    });

  const currentPage = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .slice(-1);

  return (
    <Container>
      <div className="links">
        <span>Pages</span>
        {crumbs}
      </div>

      <h2>{currentPage.length !== 0 ? currentPage : "Dashboard"}</h2>
    </Container>
  );
};

export default Breadcrumb;
