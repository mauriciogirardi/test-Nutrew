import { shade } from 'polished';
import styled from 'styled-components';

export const HeaderBackground = styled.div`
  background-color: #2bcfa2;
`;

export const Content = styled.div`
  margin-bottom: 40px;

  h1 {
    font-family: 'DM Serif Display', serif;
    color: #fff;
    font-size: 50px;
  }

  p {
    font-size: 20px;
    color: #fff;
    max-width: 800px;
  }

  @media (max-width: 500px) {
    padding: 0 16px;
    h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .rec-dot {
    box-shadow: 0 0 1px 3px #fff !important;
    background-color: #2bcfa2;
    display: none;
  }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px #ccc !important;

  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E !important;
  }

  > img {
    height: 700px;
  }

  @media (max-width: 1024px) {
    max-width: 1000px;
    > img {
      height: 500px;
    }
  }

  @media (min-width: 1380px) {
    max-width: 1300px;
    > img {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 700px;
    align-items: flex-start;
    > img {
      width: 100%;
    }

    .rec-dot {
      display: block;
      margin-bottom: 80px;
    }
  }

  @media (max-width: 500px) {
    max-width: 100%;
    > img {
      display: none;
    }
  }
`;

export const Recipes = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 80px auto;

  .rec-dot {
    box-shadow: 0 0 1px 3px #ccc !important;
    background-color: #2bcfa2;
  }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px #ccc !important;

  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E !important;
  }

  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: lighter;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    line-height: 35px;
    width: 1200px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  img {
    width: 350px;
  }

  @media (min-width: 1300px) {
    max-width: 1380px;
  }

  @media (max-width: 1024px) {
    p {
      width: 100%;
      padding: 0 16px;
    }
  }
`;

export const ContainerBackgroundInfo  = styled.div`
  background-color: #f9f9f9;
  padding: 30px 0;

  @media (max-width: 500px)  {
    background-color: transparent;
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;
  max-width:  1300px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  .rec-dot {
    box-shadow: 0 0 1px 3px #ccc !important;
    background-color: #2bcfa2;
  }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px #ccc !important;

  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E !important;
  }

  > div {

    img.image01 {
      position: absolute;
      transform: rotate(110deg);
      width: 170px;
      top: 100px;
      left: 30px;
    }

    img.image02 {
      position: absolute;
      width: 120px;
      top: 120px;
      left: 30px;
    }

    img.image03 {
      position: absolute;
      transform: rotate(180deg);
      width: 180px;
      top: -90px;
      left: 60px;
    }

    img.image04 {
      position: absolute;
      transform: rotate(50deg);
      width: 120px;
      top: -50px;
      left: 60px;
    }

    > img {
      width: 100%;
    }
  }

  @media (max-width: 500px)  {
    padding: 0 16px;

    > div {
      position: absolute;
      top: 50px;

      img {
        opacity: 0.3;
      }
    }
  }
`;

export const  ContentInfo = styled.div`
  max-width: 500px;

  h1 {
    font-size: 40px;
    font-weight: 500;
    font-family: 'DM Serif Display', serif;
  }

  p {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 330px;
    img {
      width: 80px;
    }
  }
`;

export const ContainerBackgroundArticle = styled.div`
  background-color: #46d0a3;
  padding: 130px 0 80px 0;

  @media (max-width: 500px) {
    margin-top: 650px;
  }
`;

export const Article = styled.article`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;


  .rec-dot {
    box-shadow: 0 0 1px 3px #fff !important;
    background-color: #2bcfa2;
  }

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px #ccc !important;

  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E !important;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ContentArticle  = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 400px;
  }

  main {
    margin-left: 60px;
    max-width: 500px;

    h1 {
      font-family: 'DM Serif Display', serif;
      font-size: 35px;
      color: #fff;
      font-weight: 500;
    }

    p {
      color: #fff;
      font-size: 18px;
      line-height: 25px;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 16px;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    main {
      margin-top: 50px;
      margin-left: 0;
      max-width: 100%;
    }
  }
`;

export const Delicious = styled.section`
  margin: 90px auto;
  max-width: 1100px;
  width: 100%;
  display: flex;
  padding: 0 16px;

  div.img {
    width: 500px;
    height: 500px;
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    div.img {
      display: none;
    }
  }
`;

export const ContentDelicious = styled.div`
  width: 650px;

  h1 {
    font-size: 60px;
    color: #3ca45f;
    font-family: 'DM Serif Display', serif;
    font-weight: 500;
    line-height: 60px;
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    width: 450px;
  }


  button {
    background-color: #00EA87;
    border: 0;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    margin-top: 40px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.2,'#00EA87')};
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    h1 {
      font-size: 50px;
    }

    p {
      width: 100%;
    }
  }
`;

export const App = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  width: 110px;
  padding: 3px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${shade(0.2, '#fff')};
  }

  & + div {
    margin-left: 20px;
    width: 115px;
    padding: 3px 5px;
  }

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }

  div {
    span {
      font-size: 8px;
      margin-bottom: -4px;
      display: block;
    }

    h2 {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const Download = styled.div`
  margin-top: 130px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const ContainerBackgroundFooter = styled.div`
  background-color: #2c3834;
  padding: 30px 0 50px 0;
`;

export const Footer = styled.footer`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 0 16px;


  p {
    color: #fff;
    font-size: 10px;
    margin-top: 30px;
  }
`;

export const FooterNav = styled.nav`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 120px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 430px;
    width: 100%;

    li {

      a {
        display: block;
        position: relative;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
        margin-top: 10px;
        padding: 5px 10px;
        transition: .5s;
        z-index: 1;
        text-transform: uppercase;

        &:hover {
          color: #2bcfa2;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
          transform: scaleY(2);
          opacity: 0;
          transition: .5s;
          z-index: -1;
        }

        &:hover::before {
          transform: scaleY(1.2);
          opacity: 1;
        }

        &::after {
          content: '';
          position: absolute;
          top: 1px;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          transform: scale(0);
          transition: .5s;
          z-index: -1;
        }

        &:hover::after {
          transform: scale(1);
        }
      }

    }
  }

  @media (max-width: 500px) {
    ul {
      display: none;
    }
  }
`;

export const FooterForm = styled.div`

  h1 {
    color: #fff;
    font-weight: 600;
    margin-top: 30px;
    font-size:  40px;
  }

  h2 {
    color: #59e889;
    font-weight: 600;
    font-size:  40px;
    margin-bottom: 50px;
  }
  form {
    input {
      height: 40px;
      width: 300px;
      padding-left: 10px;
      border-radius: 8px 0 0 8px;
      border: 0;
      outline: none;

      &::placeholder {
        font-size: 10px;
      }
    }

    button {
      background-color: #59e889;
      border: 0;
      width: 130px;
      height: 40px;
      border-radius: 0 8px 8px 0;
      margin-left: 5px;
    }

    span {
      color: #FFF;
      display: block;
      margin-top: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size:  30px;
    }
    form {
      input {
        width: 200px;
      }
    }
  }
`;

export const Social = styled.div`
  margin-top: 50px;
  max-width: 230px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 20px;
    color: #fff;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: ${shade(0.2, '#2bcfa2')};
    }
  }
`;

