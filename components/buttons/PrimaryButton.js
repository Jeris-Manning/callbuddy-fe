import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PrimaryButton = ({ buttonWidth, linkTo, buttonText }) => {
  return (
    <Link href={linkTo} passHref>
      <ButtonLink buttonWidth={buttonWidth}>{buttonText}</ButtonLink>
    </Link>
  );
};

export default PrimaryButton;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: ${(props) => props.buttonWidth};
  padding: 12px;
  text-decoration: none;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.neutralLight};
`;
