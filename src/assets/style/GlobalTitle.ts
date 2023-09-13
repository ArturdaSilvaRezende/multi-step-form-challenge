import styled from "styled-components";

const GlobalTitle = styled.div`
  margin-top: 10%;

  h1 {
    color: var(--Marine-blue);
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    color: var(--Cool-gray);
    margin-bottom: 7%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin-top: 2%;
  }

  @media screen and (max-width: 599px) {
    margin-top: 0;

    h1 {
      font-size: 1.45rem;
    }
  }
`;

export default GlobalTitle;
