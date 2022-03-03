import React from "react";
import styled from "styled-components";
import CallCategoryButton from "../components/buttons/CallCategoryButton";
import medicalIcon from "../public/images/medicalHand.svg";

const tester = () => {
  return (
    <CallCategoryButton
      color="#357af5"
      linkTo="/"
      icon={medicalIcon}
      buttonText="Medical"
    />
  );
};

export default tester;

const StyledMain = styled.main`
  height: 700px;
`;
