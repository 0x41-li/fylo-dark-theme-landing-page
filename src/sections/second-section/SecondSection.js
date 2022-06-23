// styled components
import Container from "../../styled-components/Container";
import {
  IllustImg,
  Section,
  SectionAnchor,
  SectionAnchorArrowRightSvg,
  SectionAnchorArrowWrapper,
  SectionH2,
  SectionPara,
  TextWrapper,
  SectionAnchorText,
  SectionAnchorUnderline,
  ImageWrapper,
} from "./SecondSection.style";

// images
import illustration from "../../assets/images/second-section-illustration.png";

const SecondSection = () => {
  return (
    <Container>
      <Section>
        <ImageWrapper>
          <IllustImg src={illustration} alt="" />
        </ImageWrapper>

        <TextWrapper>
          <SectionH2>Stay productive, wherever you are</SectionH2>

          <SectionPara>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </SectionPara>

          <SectionPara>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.{" "}
          </SectionPara>

          <SectionAnchor href="#">
            <SectionAnchorText>See how Fylo works</SectionAnchorText>
            <SectionAnchorArrowWrapper>
              <SectionAnchorArrowRightSvg />
            </SectionAnchorArrowWrapper>
            <SectionAnchorUnderline />
          </SectionAnchor>
        </TextWrapper>
      </Section>
    </Container>
  );
};

export default SecondSection;
