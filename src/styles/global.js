import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font: 600 18px 'Poppins', sans-serif;
        width: 100vw;
        height: 100vh;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background:#333;
    }

    ::-webkit-scrollbar-thumb {
        background: #808081;
        border-radius: 5px
    }
`;
export default GlobalStyle;
