// styled components
import Container from "../../styled-components/Container";
import { HeaderEl, StyledLogo, NavUl, NavAnchor } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <HeaderEl>
        <a href="#" aria-label="Go to the home page">
          <StyledLogo />
        </a>
        <nav>
          <NavUl>
            <li>
              <NavAnchor href="#">Features</NavAnchor>
            </li>
            <li>
              <NavAnchor href="#">Team</NavAnchor>
            </li>
            <li>
              <NavAnchor href="#">Sign In</NavAnchor>
            </li>
          </NavUl>
        </nav>
      </HeaderEl>
    </Container>
  );
};

export default Header;
