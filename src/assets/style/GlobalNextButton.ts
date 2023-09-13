import styled from "styled-components";

const GlobalNextButton = styled.button`
  background-color: var(--Marine-blue);
  border-radius: 10px;
  color: var(--Magnolia);
  display: block;
  font-weight: 500;
  padding: 15px;
  transition: 0.3s ease;
  width: 130px;

  &:hover {
    background-color: var(--Marine-blue-hover);
  }

  @media screen and (max-width: 599px) {
    font-size: 14px;
    padding: 12px;
    width: 110px;
  }
`;

export default GlobalNextButton;
