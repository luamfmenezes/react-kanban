import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    *{
        padding:0;
        margin:0;
        outline:0;
        box-sizing:border-box;
    }

    html, body, #root{
        width:100%;
        height:100%;
    }

    body{
        font-family: 'Roboto';
        font-size:14px;
        color:#333;
        background:#ecf1f8;
        -webkit-font-smoothing: antialiased !important;
    }
    ul{
        list-style:none;
    }
    button{
        font: 13px 'Roboto';
        cursor:pointer;
    }
`;
