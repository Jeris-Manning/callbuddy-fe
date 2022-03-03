import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <NavWrapper>
        <NavBar />
      </NavWrapper>
      <main id="mainContent">{children}</main>
    </>
  );
};

export default Layout;

const NavWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  /* @media (max-width: 1000px) {
    margin: 10px 20px;
    max-width: 652px;
  } */
`;
