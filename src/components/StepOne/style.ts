import styled from "styled-components";

export const StepOne = styled.section`
  margin-left: 25px;
  width: 68%;

  .stepone__form {
    .stepone__form-container {
      .stepone__form-item {
        display: flex;
        flex-direction: column;

        & + .stepone__form-item {
          margin-top: 25px;
        }

        .stepone__form-labels {
          margin-bottom: 7px;
          display: flex;
          justify-content: space-between;

          label {
            color: var(--Marine-blue);
            font-weight: 300;
          }

          .label__required {
            color: var(--Strawberry-red);
            font-weight: 500;
          }
        }

        input {
          border: 1px solid var(--Light-gray);
          border-radius: 5px;
          color: var(--Marine-blue);
          cursor: pointer;
          font-weight: 700;
          padding: 10px;

          &:focus {
            outline: 1px solid var(--Marine-blue);
          }

          &:hover {
            border: 1px solid var(--Purplish-blue);
          }

          &::placeholder {
            color: var(--Cool-gray);
            font-weight: 500;
          }
        }
      }
    }

    .stepone__form-button {
      margin: 100px auto 0 auto;
      width: 100%;

      .steptop__form-next {
        margin: 22% 0 0 auto;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .stepone__form {
      .stepone__form-button {
        margin: 80px auto 0 auto;
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .stepone__form {
      .stepone__form-button {
        margin-left: auto;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .stepone__form {
      .stepone__form-button {
        background-color: var(--White);
        height: 70px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        .steptop__form-next {
          position: relative;
          top: -67px;
          right: 20px;
        }
      }
    }
  }
`;
