import ImgNext from "../ImgNext";
import React from "react";
import styled from "styled-components";
import Link from "next/link";


const CallCategoryButton = ({ color, linkTo, icon, buttonText }) => {

  return (
    <Link href={linkTo} passHref>
      <ButtonLink $colorA={color + "96"} $colorB={color + "FF"}>
        <ImgNext
          className="buttonIcon"
          alt="hand holding medical cross symbol"
          src={icon}
        />
        {buttonText}
      </ButtonLink>
    </Link>
  );
};

export default CallCategoryButton;

const ButtonLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 204px;
  height: 150px;
  border-radius: 25px;
  background: linear-gradient(
    180deg,
    ${(props) => props.$colorA} 0%,
    ${(props) => props.$colorB} 100%
  );
  font-size: 18px;
  font-weight: 800;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.neutralLight};

  .buttonIcon {
    width: 50px;
    height: 50px;
  }
`;
