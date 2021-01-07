import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 168px;
    height: 30px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 560px;
    width: 100%;

    li {

      a {
        display: block;
        position: relative;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        margin-top: 10px;
        padding: 5px 10px;
        transition: .5s;
        z-index: 1;

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

      img {
        width:60px;
        height: 60px;
        border-radius: 50%;
        object-fit: contain;
        border: 2px solid  #2bcfa2;
        margin-top: 1px;
        margin-left: 1px;

      }

      &:nth-last-child(1) {
        content:  '';
        background-color: #fff;
        width:62px;
        height: 62px;
        border-radius: 50%;
      }

    }

    @media (max-width: 500px) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 30px 16px;

    img {
      width: 100px;
      height: 30px;
    }
  }
`;

export const HeaderContainer = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  height: 900px;

  @media (min-width: 1380px) {
    height: 1000px;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;
