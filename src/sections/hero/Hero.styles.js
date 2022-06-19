import styled from "styled-components";

// Utilities and shared components
import {
  BoldRalewayFont,
  RegularOpenSansFont,
} from "../../styled-components/Utilities";

export const Section = styled.section`
  margin: 48px 27px 0px 28px;

  @media screen and (min-width: 576px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 992px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 734px;
    margin-top: 75px;
  }
`;

export const Illustr = styled.img`
  width: 304px;
  height: 225px;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 992px) {
    width: 520px;
    height: 386px;
  }

  @media screen and (min-width: 1200px) {
    width: 720px;
    height: 534px;
  }
`;

export const H1 = styled.h1`
  ${BoldRalewayFont};
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;

  margin-top 33px;

  @media screen and (min-width: 1200px) {
    font-size: 40px;
    line-height: 60px;
    margin-top: 36px;
  }

`;

export const Para = styled.p`
  ${RegularOpenSansFont};
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;

  margin-top: 15px;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 32px;
    max-width: 589px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Button = styled`
  width: 240px;
  height: 48px;
  display: block;
  margin: 0 auto;

  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  margin-top: 32px;

  background: linear-gradient(134.79deg, #63e1d9 -42.11%, #34a0cd 100%);
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
  border-radius: 24px;

  ${BoldRalewayFont};

  &:hover {
    background: #8adae3;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
    width: 280px;
    height: 56px;
    border-radius: 28px;
  }
`;
