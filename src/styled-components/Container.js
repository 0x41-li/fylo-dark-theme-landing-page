import styled from "styled-components";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }

  ${(props) => props.css};
`;

export default Container;
