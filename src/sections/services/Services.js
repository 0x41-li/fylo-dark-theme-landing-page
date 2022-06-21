// styled components
import Container from "../../styled-components/Container";
import {
  ServiceH2,
  PhoneAndAComputerSvg,
  Section,
  ServiceBox,
  ServicesWrapper,
  ServicePara,
  SecuritySvg,
  ClockSvg,
  FoldersAndFilesSvg,
  ImageWrapper,
} from "./Services.style";

// images

const Services = () => {
  return (
    <Container>
      <Section>
        <ServicesWrapper>
          <ServiceBox>
            <ImageWrapper>
              <PhoneAndAComputerSvg />
            </ImageWrapper>
            <ServiceH2>Access your files, anywhere</ServiceH2>
            <ServicePara>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </ServicePara>
          </ServiceBox>
          <ServiceBox>
            <ImageWrapper>
              <SecuritySvg />
            </ImageWrapper>
            <ServiceH2>Security you can trust</ServiceH2>
            <ServicePara>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </ServicePara>
          </ServiceBox>
          <ServiceBox>
            <ImageWrapper>
              <ClockSvg />
            </ImageWrapper>
            <ServiceH2>Access your files, anywhere</ServiceH2>
            <ServicePara>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </ServicePara>
          </ServiceBox>
          <ServiceBox>
            <ImageWrapper>
              <FoldersAndFilesSvg />
            </ImageWrapper>
            <ServiceH2>Access your files, anywhere</ServiceH2>
            <ServicePara>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </ServicePara>
          </ServiceBox>
        </ServicesWrapper>
      </Section>
    </Container>
  );
};

export default Services;
