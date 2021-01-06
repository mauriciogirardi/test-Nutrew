import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #333;
    color: #fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  a  {
    color: #fff;
    padding: 10px 0;
    display: block;
  }
`;