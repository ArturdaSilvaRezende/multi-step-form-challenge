import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--White);
  border-radius: 10px;
  height: 90%;
  margin-top: 20px;
  padding: 20px;
  width: 70vw;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 20px;
    width: 94%;
  }

  @media screen and (max-width: 767px) {
    background-color: transparent;
    flex-direction: column;
    margin-top: 0;
    padding: 0;
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    background-color: transparent;
    flex-direction: column;
    height: auto;
  }
`;
