import styled from "styled-components";
import {
  BoldOpenSansFont,
  BoldRalewayFont,
  RegularOpenSansFont,
} from "../../styled-components/Utilities";

export const Section = styled.section`
  margin-top: 160px;

  padding: 0 15px;

  height: 177px;

  overflow: visible;

  @media screen and (min-width: 576px) {
    padding: 0px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 201px;
  }
`;

export const FormBox = styled.form`
  max-width: 863px;

  background: #1b2330;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.254274);
  border-radius: 9px;

  

  margin: 0 auto;

  display: block;

  padding: 40px 28px 37px 28px;

  @media screen and (min-width: 992px) {
    height: 275px;
    padding: 42px 77px 41px 77px;
  }
`;

export const FromBoxHeading = styled.h2`
  ${BoldRalewayFont};

  font-size: 18px;
  line-height: 24px;

  color: #ffffff;

  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const FormBoxPara = styled.p`
  ${RegularOpenSansFont};
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;

  margin-top: 16px;

  max-width: 673px;

  margin: 16px auto 0px auto;
`;

// input and button wrapper
export const FormInputBtnWrapper = styled.div`
  display: block;
  margin-top: 32px;

  @media screen and (min-width: 992px) {
    display: flex;
    margin-top: 38px;
    gap: 29px;
  }
`;

// input and error wrapper
export const FormInputWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 992px) {
    margin: 0;
    max-width: unset;
    flex: 0 0 480px;
  }
`;

export const FormInputError = styled.p`
  ${BoldOpenSansFont};

  font-size: 10px;
  line-height: 14px;

  color: #ff4242;
  margin-top: 5px;
  margin-left: 29px;

  @media screen and (min-width: 992px) {
    margin-left: 38px;
  }
`;

export const FormEmailInput = styled.input`
  display: block;

  background: #ffffff;
  box-shadow: 1px 1px 3px rgba(7, 4, 59, 0.157043);
  border-radius: 24px;

  width: 100%;
  height: 48px;

  padding: 0px 29px;

  border: none;

  &::placeholder {
    ${RegularOpenSansFont};
    font-size: 10px;
    line-height: 14px;

    color: #c0c0c0;
  }

  &:hover:focus {
    outline: none;
  }

  @media screen and (min-width: 992px) {
    padding: 0px 38px;
  }
`;

export const FormBtn = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;

  ${BoldRalewayFont};

  background: linear-gradient(132.02deg, #63e1d9 -31.85%, #34a0cd 100%);
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
  border-radius: 24px;

  width: 100%;
  max-width: 280px;
  height: 48px;

  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  margin-top: 24px;

  overflow: hidden;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    transition: opacity 0.15s;

    z-index: -1;

    opacity: 0;

    background: #8adae3;
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (min-width: 992px) {
    margin: 0;
    flex: 0 0 200px;
  }
`;
