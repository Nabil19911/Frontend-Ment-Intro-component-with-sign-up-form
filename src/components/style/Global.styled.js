import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body{
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        background-image: url(${prop => prop.imageUrl});
        background-repeat: no-repeat;
        background-position: top;
        background-size: 100%;
        height: 100%;
        background-color: hsl(0, 100%, 74%);
        color: white;
        @media (orientation: landscape) {
            background-repeat: repeat;
            background-size: 30%;
        }
        @media (min-width:1280px){
            display:flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        
    }
`;

export default GlobalStyle;