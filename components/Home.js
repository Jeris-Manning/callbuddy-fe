import React from "react";
import styled from "styled-components";
import CallCategoryButton from "../components/buttons/CallCategoryButton";
import medicalHand from "../public/images/medicalHand.svg";
import asterisk from "../public/images/asterisk.svg";
import cutlery from "../public/images/cutlery.svg";
import phoneIcon from "../public/images/phoneIcon.svg";
import wavingHand from "../public/images/wavingHand.svg";
import ImgNext from "../components/ImgNext";

const Home = ({ user }) => {
  return (
    <HomeWrapper>
      <div className="greeting">
        <h1>Hi, {user.given_name ?? user.name}</h1>
        <ImgNext src={wavingHand} className="wave" alt="waving hand" />
      </div>
      <h2>Who would you like to call?</h2>
      <CallButtonsWrapper>
        <CallCategoryButton
          colorA="#D67F88"
          colorB="#E24256"
          linkTo="/"
          icon={asterisk}
          buttonText="Emergency"
        />
        <CallCategoryButton
          colorA="#77D770"
          colorB="#53AFC8"
          linkTo="/"
          icon={cutlery}
          buttonText="Restaurant"
        />
        <CallCategoryButton
          colorA="#60D0F0"
          colorB="#357AF5"
          linkTo="/"
          icon={medicalHand}
          buttonText="Medical"
        />
        <CallCategoryButton
          colorA="#A24CDD"
          colorB="#3F42CE"
          linkTo="/"
          icon={phoneIcon}
          buttonText="General Call"
        />
      </CallButtonsWrapper>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 158px; */
  @media (max-width: 1000px) {
    padding: 0 10px;
  }
  .greeting {
    max-width: 500px;
    align-items: center;
    display: flex;
    height: 82px;
    margin: 25px 0;
    flex: auto;
  }
  .wave {
    margin-left: 15px;
    height: 60px;
    width: 60px;
  }

  h2 {
    margin-bottom: 25px;
    flex: auto;
  }
`;

const CallButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin: 8px;
  }
  
`;
