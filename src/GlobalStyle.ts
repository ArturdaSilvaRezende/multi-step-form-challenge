import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-size: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--Magnolia);
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

   
    :root {
        // ============== Colors ==============

        //primary

        --Marine-blue: hsl(213, 96%, 18%);
        --Marine-blue-hover: hsl(213, 96%, 18%, 0.9);
        --Purplish-blue: hsl(243, 100%, 62%);
        --Purplish-blue-hover: hsl(243, 100%, 62%, 0.6);
        --Pastel-blue: hsl(228, 100%, 84%);
        --Light-blue: hsl(206, 94%, 87%);
        --Strawberry-red: hsl(354, 84%, 57%);

        //neutral

        --Cool-gray: hsl(231, 11%, 63%);
        --Light-gray: hsl(229, 24%, 87%);
        --Magnolia: hsl(217, 100%, 97%);
        --Alabaster: hsl(231, 100%, 99%);
        --White: hsl(0, 0%, 100%);
    }
`;

export default GlobalStyle;
