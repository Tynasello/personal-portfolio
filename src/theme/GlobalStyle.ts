/*--------------------------------------------------------------*/

import { createGlobalStyle } from "styled-components";

/*--------------------------------------------------------------*/

const GlobalStyle = createGlobalStyle`

    /*--------------------------------------------------------------*/
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

    /*--------------------------------------------------------------*/
    /* Miscellaneous resets */

    body {
        line-height: 1.25;
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
        font-family: inherit; 
        font-size: 100%; 
        line-height: 1.15; 
        margin: 0; 
    }

    /*--------------------------------------------------------------*/
    /* Global Styling */


    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Source Sans Pro", sans-serif;
        background-color: #16161a;
        color: #fffffe;
        letter-spacing: -0.01em;
        font-weight: 700;
    }
    h1,h2,h3, h4{
        font-size: clamp(50px, 3.5vw, 100px);
    }
        
    
    p{
        font-size: 1.6rem;
    }
    /*--------------------------------------------------------------*/
    /* active work experience section */

    .active {
        border-left: 3px solid #7f5bf0;
        margin-left:-3px;
        background-color: #383a61;
        color:#fffffe;
        @media (max-width: 1300px) {
            border-left: none;
            margin-left:0;
            border-bottom: 3px solid #7f5bf0;
            margin-bottom:-3px;
        }
    }
    /*--------------------------------------------------------------*/
    /* Styling for landing page components to fade up on scroll */

    .fadein{
        transform:translateY(30%);
    }
    .fadeInActive{ 
        transform:translateY(0%);
        transition:1s ease-out;
    }
    /*--------------------------------------------------------------*/
    /* Hamburger menu design from Tyler Potts */

    .hamburger{
        display:block;
        position:absolute;
        user-select: none;
        appearance:none;
        border:none;
        outline:none;
        cursor:pointer;
        background:none;
        margin-top:6px;
        right: 2rem;
        z-index:11;

    }
    .hamburger.is-active{
        position:fixed;
    }
    .hamburger:hover span:nth-child(2){
        transform:translateX(8px);
        background-color: #7f5bf0;
    }
    .hamburger.is-active span:nth-child(1){
        transform:translate(0,-1px)rotate(45deg);
    }
    .hamburger.is-active span:nth-child(2){
        opacity: 0;
        transform:translateX(-15px);
    }
    .hamburger.is-active span:nth-child(3){
        transform:translate(-2px,2px)rotate(-45deg);
    }
    .hamburger span{
        display:block;
        width: 30px;
        height: 3px;
        margin-bottom:6px;
        position: relative;
        background-color: #fffffe;
        border-radius:6px;
        transform-origin: 0 0;
        transition: .4s;
    }   
    .hamburger.is-active:hover span{
        background-color: #7f5bf0;
    }  

    /*--------------------------------------------------------------*/
    /* Modal for hamburger menu */

    .modal{
        display: none;
    }
    .modal-active{
        position: absolute;
        top:0;
        right: 0;
        height: 100vh;
        width: 100vw;
        position: fixed;
        background-color:#383847;
        z-index:10;
        display: flex;
        &>*{
            flex-direction: column;
            padding: 8rem 4rem;
            @media (max-width: 370px) {
                padding: 4rem;
            }
            &>*{
                padding: 1rem 0;
                font-size: 2rem;
                @media (max-width: 450px) {
                    font-size: 1.5rem;
                }
                &:hover{
                    color:#7f5bf0
                }
            }
        }
    }

`;
/*--------------------------------------------------------------*/
export default GlobalStyle;
/*--------------------------------------------------------------*/
