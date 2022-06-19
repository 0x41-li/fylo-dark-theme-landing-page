import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { RegularRalewayFont } from "../../styled-components/Utilities";

export const HeaderEl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 24px 0px 20px;

  @media screen and (min-width: 576px) {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 73px;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 80px;
  height: 24px;
  display: block;

  @media screen and (min-width: 1200px) {
    width: 176px;
    height: 52px;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  gap: 25px;
`;
export const NavAnchor = styled.a`
  ${RegularRalewayFont};
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  &:hover {
    text-decoration-line: underline;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
