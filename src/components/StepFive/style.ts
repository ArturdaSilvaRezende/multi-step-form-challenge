import styled from "styled-components";

export const StepFive = styled.section`
  margin-left: 25px;
  position: relative;
  width: 68%;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    figure {
      figcaption {
        h1 {
          color: var(--Marine-blue);
          font-size: 2rem;
          margin: 20px 0;
        }

        p {
          color: var(--Cool-gray);
          line-height: 1.5;
        }
      }
    }

    .attribution {
      position: relative;
      top: 90px;

      p {
        color: var(--Cool-gray);
        display: flex;
        flex-direction: column;

        span {
          margin-bottom: 5px;

          a {
            color: var(--Marine-blue);
            font-weight: 700;
            margin-left: 5px;
            transition: 0.3s ease;

            &:hover {
              color: var(--Strawberry-red);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;

    .container {
      position: relative;
      transform: none;
      left: 0;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .container {
      top: -50px;

      .attribution {
        top: 140px;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .container {
      top: -70px;

      .attribution {
        top: 120px;
      }
    }
  }
`;
