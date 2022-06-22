import styled from "styled-components";

// utilities
import {
  BoldRalewayFont,
  RegularOpenSansFont,
} from "../../styled-components/Utilities";

// images
import { ReactComponent as PhoneAndAComputer } from "../../assets/images/phone-and-a-computer.svg";
import { ReactComponent as Security } from "../../assets/images/security.svg";
import { ReactComponent as Clock } from "../../assets/images/clock.svg";
import { ReactComponent as FoldersAndFiles } from "../../assets/images/folders-and-files.svg";

export const Section = styled.section`
  margin-top: 120px;
  padding: 0px 19px 0px 27px;

  @media screen and (min-width: 576px) {
    padding: 0px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 158px;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 80px;

  @media screen and (min-width: 576px) {
    max-width: 400px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: unset;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;

    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 880px;
    grid-column-gap: 147px;
    grid-row-gap: 79px;
  }
`;

export const ServiceBox = styled.div`
  display: block;
`;

// one service box
// service box image wrapper
export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 104px;
    height: 104px;
  }
`;
// service boxes images
export const PhoneAndAComputerSvg = styled(PhoneAndAComputer)`
  width: 63.49px;
  height: 59.17px;

  @media screen and (min-width: 1200px) {
    width: 84px;
    height: 78px;
  }
`;

export const SecuritySvg = styled(Security)`
  width: 50.45px;
  height: 64.57px;

  display: block;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 66px;
    height: 84px;
  }
`;

export const ClockSvg = styled(Clock)`
  width: 64.5px;
  height: 53.17px;

  display: block;

  @media screen and (min-width: 1200px) {
    width: 84px;
    height: 69px;
  }
`;

export const FoldersAndFilesSvg = styled(FoldersAndFiles)`
  width: 69.77px;
  height: 48.24px;

  display: block;

  @media screen and (min-width: 1200px) {
    width: 90px;
    height: 63px;
  }
`;

// service box text
export const ServiceH2 = styled.h2`
  ${BoldRalewayFont};
  font-size: 18px;
  line-height: 24px;
  text-align: center;

  margin-top: 24px;

  color: #ffffff;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 23px;
    margin-top: 16px;
  }
`;

export const ServicePara = styled.p`
  ${RegularOpenSansFont};
  font-size: 14px;
  line-height: 21px;

  text-align: center;

  color: #ffffff;

  margin-top: 8px;

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
