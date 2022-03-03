import React from "react";
import ImgNext from "../components/ImgNext";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import people from "../public/images/people.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <StyledMain>
        <div className="first">
          <h1>Create a new account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              type="text"
              {...register("exampleRequired", { required: true })}
            />
            <input
              type="text"
              {...register("exampleRequired", { required: true })}
            />
            <input
              type="email"
              {...register("exampleRequired", { required: true })}
            />
            <input
              type="password"
              {...register("exampleRequired", { required: true })}
            />
            <input
              type="password"
              {...register("exampleRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <p>This field is required</p>}

            <input type="submit" />
          </form>
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

export default Register;

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
`;
