import styled from "styled-components";

export const StepTwo = styled.section`
  margin-left: 25px;
  width: 68%;

  .active {
    background-color: var(--Magnolia);
    border: 1px solid var(--Purplish-blue) !important;
  }

  .colorActiveBlue {
    color: var(--Marine-blue);
  }

  .colorActiveGray {
    color: var(--Cool-gray);
  }

  .steptwo__cards {
    display: flex;

    .steptwo__item {
      border: 1px solid var(--Light-gray);
      border-radius: 10px;
      cursor: pointer;
      padding: 15px;
      width: 31%;

      img {
        width: 40px;
      }

      & + .steptwo__item {
        margin-left: 15px;
      }

      &:hover {
        border: 1px solid var(--Purplish-blue);
      }

      .steptwo__description {
        margin-top: 32px;

        .steptwo__description-title {
          color: var(--Marine-blue);
          font-size: 18px;
          margin-bottom: 8px;
        }

        .steptwo__description-month {
          color: var(--Cool-gray);
          font-size: 14px;
          margin-bottom: 8px;
        }

        .steptwo__description-free {
          color: var(--Marine-blue);
          font-weight: 400;
        }
      }
    }
  }

  .steptwo__plans {
    background-color: var(--Alabaster);
    border-radius: 10px;
    margin-top: 30px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 700;
    }

    button {
      background-color: var(--Marine-blue);
      border-radius: 20px;
      height: 25px;
      margin: 0 20px;
      position: relative;

      &::before {
        content: " ";
        display: block;
        width: 50px;
      }

      span {
        position: absolute;
        top: 50%;

        &::before {
          content: " ";
          background-color: var(--White);
          border-radius: 50%;
          display: block;
          height: 15px;
          width: 15px;
        }
      }
    }
  }

  .steptwo__buttons {
    margin: 105px auto 0 auto;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin-left: 0;
    width: 100%;

    .steptwo__buttons {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 599px) {
    margin: 0 0 20px 0;
    width: 100%;

    .steptwo__cards {
      flex-direction: column;

      .steptwo__item {
        display: flex;
        align-items: center;
        width: 100%;

        & + .steptwo__item {
          margin: 15px 0 0 0;
        }

        .steptwo__description {
          margin: 0 0 0 10px;

          h2,
          p {
            margin-bottom: 4px !important;
          }
        }
      }
    }

    .steptwo__plans {
      button {
        span {
          top: 44.5%;
        }
      }
    }
  }
`;
