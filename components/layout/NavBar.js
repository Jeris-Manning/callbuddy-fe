import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import ImgNext from "../ImgNext";
import Link from "next/link";
import styled from "styled-components";
import logoGraphic from "../../public/images/logoGraphic.svg";
import logoText from "../../public/images/logoText.svg";
import accountIcon from "../../public/images/accountIcon.svg";
import RegisterButton from "../buttons/RegisterButton";
import hamburger from "../../public/images/hamburger.svg";
const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <LogoDiv>
            <ImgNext
              alt="callbuddy logo"
              src={logoGraphic}
              className="logoGraphic"
            />
            <ImgNext
              alt="callbuddy logo text"
              src={logoText}
              className="logoText"
            />
          </LogoDiv>
        </a>
      </Link>
      {user ? (
        <RegisterDiv>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
          <Link href="/calls">
            <a>Calls</a>
          </Link>
          <Link href="/messages">
            <a>Messages</a>
          </Link>
          {!burgerOpen && (
            <ImgNext
              className="burgerIcon"
              alt="3 line hamburger menu"
              src={hamburger}
            />
          )}

          <a href="/api/auth/logout" className="accountContainer">
            <span>Logout</span>
            <ImgNext
              className="accountIcon"
              alt="Icon of person's bust"
              src={accountIcon}
            />
          </a>
        </RegisterDiv>
      ) : (
        <UnregisteredDiv>
          <a href="/api/auth/login">Log In</a>

          <RegisterButton
            buttonWidth="130px"
            linkTo="/api/auth/login"
            buttonText="Register"
          />
        </UnregisteredDiv>
      )}
    </StyledHeader>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 6px 58px;

  @media (max-width: 1000px) {
    margin: 10px 58px;
    max-width: 800px;
  }
  @media (max-width: 600px) {
    margin: 10px 15px;
    max-width: 800px;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: auto;
  max-width: 280px;

  .logoGraphic {
    width: 85px;
    height: 80px;
  }

  .logoText {
    width: 174px;
    height: 38px;
  }
  @media (max-width: 1000px) {
    justify-content: flex-start;
    max-width: 85px;
    .logoText {
      display: none;
    }
  }
`;
const RegisterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 678px;
  min-width: 570px;
  flex: auto;
  padding-left: 20px;

  .burgerIcon {
    width: 30px;
    height: 30px;
    display: none;
  }

  .accountIcon {
    width: 42px;
    height: 42px;
  }
  .accountContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 126px;
  }

  @media (max-width: 1000px) {
    max-width: 500px;
    min-width: 300px;
    .accountContainer {
      width: auto;
    }
    span {
      display: none;
    }
  }
  @media (max-width: 600px) {
    max-width: 100px;
    min-width: 100px;
    a:not(.accountContainer) {
      display: none;
    }

    .burgerIcon,
    .loggedOut {
      display: block;
    }
  }
`;

const UnregisteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;
