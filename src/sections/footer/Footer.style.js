import styled from "styled-components";

// images/icons
import { ReactComponent as FooterLogo } from "../../assets/images/footer-logo.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/location-icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone-icon.svg";
import { ReactComponent as mailIcon } from "../../assets/images/mail-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram-icon.svg";

// Utilities
import { RegularOpenSansFont } from "../../styled-components/Utilities";

export const Section = styled.footer`
  position: relative;
  z-index: 990;

  background: #0b1524;

  padding: 259px 28px 52px 28px;

  @media screen and (min-width: 576px) {
    padding: 259px 0px 52px 0px;
  }

  @media screen and (min-width: 1200px) {
    padding: 169px 0px 53px 0px;
  }
`;

// footer first row
// logo
export const LogoSvg = styled(FooterLogo)`
  display: block;
  width: 108px;
  height: 31px;
`;

// footer second row
export const FooterSecondRow = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    margin-top: 56px;

    & > * {
      flex: 1 1 40%;
    }
  }

  @media screen and (min-width: 992px) {
    & > * {
      flex: 1 1 20%;
    }
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    gap: 0px;
    & > * {
      flex: 0 0 auto;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

// footer company location
export const ConpanyLocationWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  margin-top: 35px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 992px) {
    flex: 1 1 30%;
  }

  @media screen and (min-width: 1200px) {
    flex: 0 0 auto;
  }
`;

export const CompanyLocationIcon = styled(LocationIcon)`
  height: 18px;

  flex: 0 0 13px;

  margin-top: 8px;
`;

export const CompanyLocationPara = styled.p`
  ${RegularOpenSansFont};
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;

  max-width: 279px;

  @media screen and (min-width: 1200px) {
    max-width: 339px;
  }
`;

// company contact info
export const CompanyContactInfoWrapper = styled.div`
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`;

// phone
export const CompanyPhoneWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const CompanyPhoneIcon = styled(PhoneIcon)`
  flex: 0 0 13px;
  height: 13px;

  margin-top: 3px;
`;

export const CompanyPhoneNumber = styled.p`
  ${RegularOpenSansFont};

  font-size: 14px;
  line-height: 21px;

  color: #ffffff;
`;

// mail
export const CompanyMailWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin-top: 16px;
`;

export const CompanyMailIcon = styled(mailIcon)`
  flex: 0 0 20px;
  height: 16px;

  margin-top: 3px;
`;

export const CompanyMailText = styled.p`
  ${RegularOpenSansFont};

  font-size: 14px;
  line-height: 21px;

  color: #ffffff;
`;

// main menu
export const MainMenuWrapper = styled.div`
  margin-top: 56px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 56px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 146px;
  }
`;

// secondary menu
export const SecondaryMenuWrapper = styled.div`
  margin-top: 48px;

  display: flex;
  flex-direction: column;

  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 56px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`;

// both menus anchors have the same styled
export const MenuAnchor = styled.a`
  ${RegularOpenSansFont};

  font-size: 16px;
  line-height: 22px;

  color: #ffffff;

  &:hover {
    font-weight: 700;
  }
`;

// social media
export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 56px;

  @media screen and (min-width: 1200px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 108px;
  }
`;

export const IconWrapper = styled.a`
  width: 27px;
  height: 27px;

  border-radius: 50%;

  border: 1px solid #dfe4f0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.15s;

  &:hover {
    border: 0.918357px solid #62e0d9;
  }

  &:hover g path {
    fill: #62e0d9;
  }

  @media screen and (min-width: 768px) {
    width: 31.22px;
    height: 31px;
  }
`;

export const FacebookSvg = styled(FacebookIcon)`
  display: block;
  width: 6.09px;
  height: 12.82px;

  @media screen and (min-width: 768px) {
    width: 7.03px;
    height: 14.73px;
  }
`;

export const TwitterSvg = styled(TwitterIcon)`
  display: block;
  width: 17.59px;
  height: 17.55px;

  @media screen and (min-width: 768px) {
    width: 20.3px;
    height: 20.15px;
  }
`;

export const InstagramSvg = styled(InstagramIcon)`
  display: block;
  width: 12.73px;
  height: 12.71px;

  @media screen and (min-width: 768px) {
    width: 14.69px;
    height: 14.59px;
  }
`;
