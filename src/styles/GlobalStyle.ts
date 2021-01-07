import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    color: #2C3835;
  }


  /* font-family: 'DM Serif Display', serif; */

 a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;
