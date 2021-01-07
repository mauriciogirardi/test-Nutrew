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
    background-color: #00A35E;
    display: none;
  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E;

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
    background-color: #2bcfa2;
  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E;
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
    background-color: #2bcfa2;
  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px #00A35E;
  }

  > div {
    position: relative;

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

export const Article = styled.article``;

export const Delicious = styled.section``;

export const Footer = styled.footer``;

export const FooterNav = styled.nav``;

export const FooterForm = styled.form``;

