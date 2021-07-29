import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #FF5959;
        }
    }
    body {
        background: ${(props) => props.theme.bg};
        font-family: "Noto Sans TC", sans-serif;
        font-weight: lighter;
    }
    @media (max-width: 780px) {
        body {
            font-weight: bold;
        }
    }
`;

export default GlobalStyles;
