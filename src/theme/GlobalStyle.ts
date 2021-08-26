/*--------------------------------------------------------------*/

import { createGlobalStyle } from "styled-components";

/*--------------------------------------------------------------*/

const GlobalStyle = createGlobalStyle`
    /* Reset styles for all structural tags */
    a,  body, button, canvas,  div, form,
    h1, h2, h3, h4, h5, h6, head, header,  
    hr, html, i, iframe, img, input,  
    label, legend, li, nav,p, param,section,
    span, textarea, tfoot,  ul {
        border: 0;
        font-size: 100%;
        font: inherit;
        margin: 0;
        outline: none;
        padding: 0;
        text-align: left;
        text-decoration: none;
        vertical-align: baseline;
        z-index: 1;
    }

    /* Miscellaneous resets */
    body {
        line-height: 1;
    }

    ul {
        list-style: none;
    }
    a{
        color: white;
    }
    
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    }

    body{
        font-family: "Source Sans Pro", sans-serif;
        background-color: #16161a;
        color: #fffffe;
        letter-spacing: -0.01em;
        font-weight: 700;
    }
    h1,h2,h3, h4{
        font-size: 4rem;
    }
    p{
        font-size: 1.6rem;
    }
    .active {
        border-left: 3px solid #7f5bf0;
        margin-left:-3px;
        background-color: #383a61;
        color:#fffffe
    }
    
`;
/*--------------------------------------------------------------*/
export default GlobalStyle;
/*--------------------------------------------------------------*/
