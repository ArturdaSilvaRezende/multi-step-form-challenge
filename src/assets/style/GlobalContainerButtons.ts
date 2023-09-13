import styled from "styled-components";

const GlobalContainerButtons = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;

  button {
    font-weight: bold;
  }

  .button__confirm {
    background-color: var(--Marine-blue);
    border-radius: 10px;
    color: var(--Magnolia);
    display: block;
    font-weight: 500;
    padding: 15px;
    transition: 0.3s ease;
    width: 130px;

    &:hover {
      background-color: var(--Purplish-blue-hover);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 80px auto 0 auto;
    width: 90%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin: 0 auto;
    width: 90%;
  }

  @media screen and (max-width: 599px) {
    background-color: var(--White);
    padding: 10px 20px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default GlobalContainerButtons;
