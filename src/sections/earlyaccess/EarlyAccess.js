import { useState } from "react";
import Container from "../../styled-components/Container";
import {
  FormBox,
  FormBoxPara,
  FormBtn,
  FormEmailInput,
  FormInputBtnWrapper,
  FormInputError,
  FormInputWrapper,
  FromBoxHeading,
  Section,
} from "./EarlyAccess.style";

const EarlyAccess = () => {
  const [emailInfo, setEmailInfo] = useState({
    value: "",
    valid: true,
    submittedOnce: false,
  });

  function handleChange(e) {
    const target = e.target;
    setEmailInfo((prevState) => ({
      ...prevState,
      value: target.value,
      valid: emailInfo.submittedOnce ? isValidEmail(target.value) : true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;

    setEmailInfo((prevState) => ({
      ...prevState,
      valid: isValidEmail(target.value),
      submittedOnce: true,
    }));
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Container>
      <Section>
        <FormBox onSubmit={handleSubmit} noValidate>
          <FromBoxHeading>Get early access today</FromBoxHeading>
          <FormBoxPara>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </FormBoxPara>
          <FormInputBtnWrapper>
            <FormInputWrapper>
              <FormEmailInput
                name="email"
                type="email"
                placeholder="email@example.com"
                value={emailInfo.value}
                onChange={handleChange}
              />
              {!emailInfo.valid ? (
                <FormInputError>Error, please check your email</FormInputError>
              ) : null}
            </FormInputWrapper>

            <FormBtn>Get Started For Free</FormBtn>
          </FormInputBtnWrapper>
        </FormBox>
      </Section>
    </Container>
  );
};

export default EarlyAccess;
