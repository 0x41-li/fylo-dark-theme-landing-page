// styled components
import Container from "../../styled-components/Container";

import {
  FeedbackBox,
  FeedbackBoxPara,
  FeedbacksWrapper,
  PersonImage,
  PersonInfoWrapper,
  PersonName,
  PersonRole,
  PersonWrapper,
  QuotesSvg,
  Section,
} from "./Feedbacks.style";

// images
import satishImage from "../../assets/images/satish-patel-image.png";
import bruceImage from "../../assets/images/bruce-mckenzie-image.png";
import ivaImage from "../../assets/images/iva-boyd-image.png";

const Feedback = () => {
  return (
    <Container>
      <Section>
        <QuotesSvg />
        <FeedbacksWrapper>
          <FeedbackBox>
            <FeedbackBoxPara>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </FeedbackBoxPara>
            <PersonWrapper>
              <PersonImage src={satishImage} alt="" />
              <PersonInfoWrapper>
                <PersonName>Satish Patel</PersonName>
                <PersonRole>Founder &amp; CEO, Huddle</PersonRole>
              </PersonInfoWrapper>
            </PersonWrapper>
          </FeedbackBox>

          <FeedbackBox>
            <FeedbackBoxPara>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </FeedbackBoxPara>
            <PersonWrapper>
              <PersonImage src={bruceImage} alt="" />
              <PersonInfoWrapper>
                <PersonName>Bruce McKenzie</PersonName>
                <PersonRole>Founder &amp; CEO, Huddle</PersonRole>
              </PersonInfoWrapper>
            </PersonWrapper>
          </FeedbackBox>

          <FeedbackBox>
            <FeedbackBoxPara>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </FeedbackBoxPara>
            <PersonWrapper>
              <PersonImage src={ivaImage} alt="" />
              <PersonInfoWrapper>
                <PersonName>Iva Boyd</PersonName>
                <PersonRole>Founder &amp; CEO, Huddle</PersonRole>
              </PersonInfoWrapper>
            </PersonWrapper>
          </FeedbackBox>
        </FeedbacksWrapper>
      </Section>
    </Container>
  );
};

export default Feedback;
