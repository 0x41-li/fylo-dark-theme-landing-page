// styled components
import Container from "../../styled-components/Container";
import {
  CompanyContactInfoWrapper,
  CompanyMailIcon,
  CompanyMailText,
  CompanyMailWrapper,
  CompanyLocationIcon,
  CompanyLocationPara,
  CompanyPhoneIcon,
  CompanyPhoneNumber,
  CompanyPhoneWrapper,
  ConpanyLocationWrapper,
  FooterSecondRow,
  LogoSvg,
  Section,
  MainMenuWrapper,
  MenuAnchor,
  SecondaryMenuWrapper,
  SocialMediaWrapper,
  IconWrapper,
  FacebookSvg,
  TwitterSvg,
  InstagramSvg,
} from "./Footer.style";
const Footer = () => {
  return (
    <Section>
      <Container>
        <LogoSvg />
        <FooterSecondRow>
          <ConpanyLocationWrapper>
            <CompanyLocationIcon />
            <CompanyLocationPara>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CompanyLocationPara>
          </ConpanyLocationWrapper>

          <CompanyContactInfoWrapper>
            <CompanyPhoneWrapper>
              <CompanyPhoneIcon />
              <CompanyPhoneNumber>+1-543-123-4567</CompanyPhoneNumber>
            </CompanyPhoneWrapper>

            <CompanyMailWrapper>
              <CompanyMailIcon />
              <CompanyMailText>example@fylo.com</CompanyMailText>
            </CompanyMailWrapper>
          </CompanyContactInfoWrapper>

          <MainMenuWrapper>
            <MenuAnchor href="#">About Us</MenuAnchor>
            <MenuAnchor href="#">Jobs</MenuAnchor>
            <MenuAnchor href="#">Press</MenuAnchor>
            <MenuAnchor href="#">Blog</MenuAnchor>
          </MainMenuWrapper>

          <SecondaryMenuWrapper>
            <MenuAnchor href="#">Contact Us</MenuAnchor>
            <MenuAnchor href="#">Terms</MenuAnchor>
            <MenuAnchor href="#">Privacy</MenuAnchor>
          </SecondaryMenuWrapper>

          <SocialMediaWrapper>
            <IconWrapper href="#" aria-label="Go to Fylo Facebook page">
              <FacebookSvg />
            </IconWrapper>

            <IconWrapper href="#" aria-label="Go to Fylo Twitter page">
              <TwitterSvg />
            </IconWrapper>

            <IconWrapper href="#" aria-label="Go to Fylo Instagram page">
              <InstagramSvg />
            </IconWrapper>
          </SocialMediaWrapper>
        </FooterSecondRow>
      </Container>
    </Section>
  );
};

export default Footer;
