import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
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
        font: 14px 'Roboto';
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
