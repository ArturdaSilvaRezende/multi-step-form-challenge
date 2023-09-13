import styled from "styled-components";

export const StepFour = styled.section`
  margin-left: 25px;
  width: 68%;

  .stepfour__buttons {
    margin: 125px auto 0 auto;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .stepfour__buttons {
      margin: 0 auto;
    }
  }
`;

export const StepFourContainer = styled.div`
  .stepfour__table {
    background-color: var(--Alabaster);
    border-radius: 10px;
    padding: 20px;
    display: block;

    hr {
      background-color: var(--Light-gray);
      border: none;
      padding: 0.5px;
      margin: 18px 0;
    }

    .stepfour__type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: var(--Marine-blue);
      }

      .stepfour__change-plan {
        h2 {
          margin-bottom: 8px;
          font-size: 16px;
        }

        button {
          color: var(--Cool-gray);
          font-size: 14px;
          text-decoration: underline;
          transition: 0.3s ease;

          &:hover {
            color: var(--Purplish-blue);
          }
        }
      }

      .stepfour__price {
      }
    }

    .stepfour__service {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;

      p {
        &:first-child {
          color: var(--Cool-gray);
        }

        &:last-child {
          color: var(--Marine-blue);
          font-weight: 500;
        }
      }
    }

    .stepfour__storage {
      display: flex;
      justify-content: space-between;

      p {
        &:first-child {
          color: var(--Cool-gray);
        }

        &:last-child {
          color: var(--Marine-blue);
          font-weight: 500;
        }
      }
    }
  }

  .stepfour__total {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 20px;

    p {
      &:first-child {
        color: var(--Cool-gray);
        font-size: 14px;
      }

      &:last-child {
        color: var(--Purplish-blue);
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .stepfour__table {
      .stepfour__type {
        .stepfour__change-plan {
          h2 {
            font-size: 14px;
          }
        }
      }
    }

    .stepfour__total {
      p {
        &:last-child {
          font-size: 18px;
        }
      }
    }
  }
`;
