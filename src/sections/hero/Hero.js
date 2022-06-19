// styled components
import Container from "../../styled-components/Container";
import { Section, Illustr, H1, Para, Button } from "./Hero.styles";

// images
import IllustrationImage from "../../assets/images/hero-illustration.png";

const Hero = () => {
  return (
    <Container>
      <Section>
        <Illustr src={IllustrationImage} />
        <H1>All your files in one secure location, accessible anywhere.</H1>
        <Para>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </Para>
        <Button>Get Started</Button>
      </Section>
    </Container>
  );
};

export default Hero;
