import styled from "styled-components";

// Utilities
import {
  BoldRalewayFont,
  RegularOpenSansFont,
} from "../../styled-components/Utilities";

// images
import { ReactComponent as arrowRight } from "../../assets/images/arrow-right.svg";

export const Section = styled.section`
  margin-top: 160px;
  padding: 0px 18px 0px 28px;

  @media screen and (min-width: 576px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    padding: 0px;
  }

  @media screen and (min-width: 768px) {
    max-width: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 137px;
    gap: 57px;
  }

  @media screen and (min-width: 1440px) {
    align-items: start;
  }
`;

// illustration
export const ImageWrapper = styled.div`
  @media screen and (min-width: 768px) {
    flex: 0 1 50%;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 615px;
  }
`;

export const IllustImg = styled.img`
  display: block;
  margin: 0 auto;

  width: 100%;
  max-width: 304px;

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 100%;
    max-width: 615px;
  }
`;

// text part
export const TextWrapper = styled.div`
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    flex: 0 1 50%;
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 563px;
  }
`;

export const SectionH2 = styled.h2`
  ${BoldRalewayFont};
  font-size: 18px;
  line-height: 24px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    max-width: 496px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 118px;
  }
`;

export const SectionPara = styled.p`
  ${RegularOpenSansFont};
  font-size: 14px;
  line-height: 21px;

  color: #ffffff;

  margin-top: 16px;
  @media screen and (min-width: 425px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

// Anchor design
export const SectionAnchor = styled.a`
  margin-top: 16px;

  position: relative;

  display: inline-flex;
  align-items: center;

  @media screen and (min-width: 425px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    left: unset;
    transform: unset;
  }
`;

export const SectionAnchorText = styled.span`
  ${RegularOpenSansFont};
  font-size: 12px;
  line-height: 16px;

  color: #62e0d9;

  transition: color 0.15s;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 22px;
  }

  ${SectionAnchor}:hover & {
    color: #ffffff;
  }
`;

export const SectionAnchorArrowWrapper = styled.div`
  width: 12px;
  height: 12px;

  background: #62e0d9;
  box-shadow: 0px 0px 2px rgba(98, 224, 217, 0.811141);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  margin-left: 7px;

  transition: background-color 0.15s;

  ${SectionAnchor}:hover & {
    background-color: #ffffff;
  }
`;

export const SectionAnchorArrowRightSvg = styled(arrowRight)`
  display: block;

  width: 5.32px;
  height: 4px;
`;

export const SectionAnchorUnderline = styled.span`
  position: absolute;
  top: 100%;
  left: 0px;

  width: 100%;
  height: 1px;

  background: #62e0d9;

  margin-top: 6px;

  transition: background-color 0.15s;

  ${SectionAnchor}:hover & {
    background-color: #ffffff;
  }
`;
