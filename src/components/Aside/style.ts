import styled from "styled-components";
import BgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import BgSidebarModile from "../../assets/images/bg-sidebar-mobile.svg";

export const Aside = styled.aside`
  background: url(${BgSidebarDesktop});
  background-size: 274px 568px;
  height: 568px;
  padding: 40px 0 0 30px;
  width: 274px;

  .aside__nav {
    .aside__ul {
      .aside__item {
        margin-bottom: 30px;

        .aside__contents {
          display: flex;
          align-items: center;

          .aside__active {
            border: 1px solid var(--White);
            border-radius: 50%;
            color: var(--White);
            font-weight: 700;
            height: 35px;
            text-align: center;
            line-height: 32px;
            margin-right: 15px;
            width: 35px;
          }

          .aside__description {
            text-transform: uppercase;

            p {
              color: var(--Light-gray);
              font-size: 12.5px;
              margin-bottom: 5px;
            }

            h2 {
              color: var(--White);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 35%;
    border-radius: 10px;
  }

  @media screen and (max-width: 767px) {
    background: url(${BgSidebarModile});
    background-size: cover;
    height: 170px;
    padding: 0;
    width: 100%;

    .aside__nav {
      position: relative;
      top: 32px;

      .aside__ul {
        display: flex;
        justify-content: center;
        padding-left: 15px;

        .aside__item {
          margin-bottom: 0;

          .aside__contents {
            .aside__description {
              display: none;
            }
          }
        }
      }
    }
  }
`;
