import React from "react";
import ImgNext from "../components/ImgNext";
import styled from "styled-components";
import people from "../public/images/people.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";

const App = () => {
  return (
    <>
      <StyledMain>
        <div className="first">
          <h2>
            It’s time to break the silence between deaf and hearing people.
          </h2>

          <h3>
            CallBuddy is a free communication app where you can text a number
            and it will make a phone call for you and transcribe everything back
            to text.
          </h3>
          <PrimaryButton
            buttonWidth="216px"
            linkTo="/register"
            buttonText="Start your first call"
          />
        </div>
        <div className="second">
          <ImgNext alt="people using computers and devices" src={people} />
        </div>
      </StyledMain>
    </>
  );
};

export default App;

const StyledMain = styled.div`
  display: flex;
  max-width: 1100px;
  flex: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 158px;
  height: 510px;
  h2,
  h3 {
    margin-bottom: 18px;
  }

  .first {
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: space-between;
    max-width: 532px;
    height: 311px;
    a {
      align-self: flex-end;
    }
  }

  .second {
    display: flex;
    justify-content: flex-end;
    /* flex: auto; */
    width: 100%;
    div {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    height: 351px;
    align-items: flex-start;
    padding: 0 20px 0 48px;
    .first {
      /* max-width: 400px;
      min-width: 300px; */
      height: 351px;
      width: 50%;
      margin-right: 15px;
    }
    .second {
      width: 50%;
      margin-top: -7%;
      div {
        /* width: 100%; */
      }
      /* width: 315px; */
    }

    @media (max-width: 600px) {
      flex-direction: column-reverse;
      height: auto;
      align-items: center;
      padding: 0 58px;
      .first,
      .second {
        margin: 0;
        padding: 0;
        height: auto;
      }
      .first {
        width: 100%;
      }
      .second {
        /* height: 245px; */
        width: 100%;
        margin-top: -15%;
      }
    }
  }
`;
