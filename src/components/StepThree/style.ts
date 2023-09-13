import styled from "styled-components";

interface Props {
  $cardid: number;
  $selectedcard: number[];
}

export const StepThree = styled.section`
  margin-left: 25px;
  width: 68%;

  .stepthree__buttons {
    margin: 70px auto 0 auto;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .stepthree__buttons {
      margin: 0 auto;
    }
  }
`;

export const StepThreeFigure = styled.figure<Props>`
  background-color: ${(props) =>
    props.$selectedcard.includes(props.$cardid)
      ? "var(--Alabaster)"
      : "var(--White)"};
  border: 1px solid
    ${(props) =>
      props.$selectedcard.includes(props.$cardid)
        ? "var(--Marine-blue)"
        : "var(--Light-gray)"};
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + figure {
    margin-top: 15px;
  }

  & + .stepthree__card {
    margin-top: 15px;
  }

  &:hover {
    border: 1px solid var(--Marine-blue);
  }

  .stepthree__card-contents {
    display: flex;
    align-items: center;

    .stepthree__card-check {
      background-color: ${(props) =>
        props.$selectedcard.includes(props.$cardid)
          ? "var(--Purplish-blue)"
          : "var(--White)"};
      border: 1px solid var(--Light-gray);
      border-radius: 5px;
      height: 20px;
      line-height: 20px;
      margin-right: 25px;
      text-align: center;
      width: 20px;
    }

    .stepthree__card-description {
      h2 {
        color: var(--Marine-blue);
        margin-bottom: 5px;
      }

      p {
        color: var(--Cool-gray);
        font-size: 14px;
      }
    }
  }

  .stepthree__plans {
    color: var(--Purplish-blue);
  }

  @media screen and (max-width: 599px) {
    padding: 12px;

    .stepthree__card-contents {
      .stepthree__card-check {
        margin-right: 15px;

        img {
          margin-bottom: 2.5px;
        }
      }

      .stepthree__card-description {
        h2 {
          font-size: 14px;
        }

        p {
          font-size: 12px;
        }
      }
    }

    .stepthree__plans {
      font-size: 14px;
    }
  }
`;
