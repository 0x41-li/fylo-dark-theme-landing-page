import styled from "styled-components";

// images
import { ReactComponent as QuotesImage } from "../../assets/images/quotes.svg";
import {
  BoldOpenSansFont,
  RegularOpenSansFont,
} from "../../styled-components/Utilities";

export const Section = styled.section`
  position: relative;
  margin-top: 154px;
  padding: 15px 38px 0px 48px;

  @media screen and (min-width: 576px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    padding: 15px 0px 0px 0px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1180px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 142px;
    padding: 37px 0px 0px 0px;
  }
`;

// quotes icon
export const QuotesSvg = styled(QuotesImage)`
  width: 22px;
  height: 15px;

  display: block;
  position: absolute;
  top: 0px;
  left: 48px;

  z-index: -1;

  @media screen and (min-width: 576px) {
    left: 0px;
  }

  @media screen and (min-width: 1200px) {
    left: 13px;
    width: 53px;
    height: 45px;
  }
`;

export const FeedbacksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 20px;
    gap: 40px;
  }
`;

export const FeedbackBox = styled.div`
  padding: 24px 20px 21px 20px;

  background: #202a3c;
  box-shadow: 0px 0px 8px 4px rgba(56, 56, 56, 0.0458843);
  border-radius: 3.93258px;

  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    padding: 40px 25px 26px 26px;
  }
`;

export const FeedbackBoxPara = styled.p`
  ${RegularOpenSansFont};

  font-size: 10px;
  line-height: 18px;

  color: #ffffff;

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    line-height: 21px;

    letter-spacing: 0.5px;
  }
`;

export const PersonWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;

  margin-top: 17px;
`;

export const PersonImage = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

export const PersonInfoWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const PersonName = styled.p`
  ${BoldOpenSansFont};
  font-size: 10px;
  line-height: 12px;

  letter-spacing: 0.5px;

  color: #ffffff;
`;

export const PersonRole = styled.p`
  ${RegularOpenSansFont};
  font-size: 7px;
  line-height: 10px;

  letter-spacing: 0.5px;

  color: #ffffff;

  @media screen and (min-width: 1200px) {
    font-size: 8px;
    line-height: 10px;

    letter-spacing: 0.571429px;
  }
`;
