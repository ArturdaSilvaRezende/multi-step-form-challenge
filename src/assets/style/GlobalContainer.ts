import styled from "styled-components";

const GlobalContainer = styled.div`
  margin: 0 auto;
  width: 75%;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 767px) {
    background-color: var(--White);
    border-radius: 10px;
    width: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    padding: 15px 20px 30px 20px;
    position: relative;
    top: -70px;
  }

  @media screen and (max-width: 599px) {
    padding: 25px 20px 30px 20px;
    position: relative;
    top: -70px;
  }
`;

export default GlobalContainer;
