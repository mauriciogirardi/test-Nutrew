import styled from 'styled-components';
import {shade} from 'polished';


export const CardBox = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  height: 380px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  header {
    width: 100%;

    h1 {
      color: #00A35E;
      font-size: 30px;
      font-weight: 600;
    }

    p {
      color: #DF3558;
      font-size: 14px;
      font-weight: 600;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  main {
    width: 100%;

    p {
      font-size: 15px;
      line-height: 25px;
      position: relative;

      &::after {
        content: '-';
        position: absolute;
        right: 0;
      }
    }
  }

  button {
    background-color: #00EA87;
    border: 0;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    margin-bottom: -40px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.2,'#00EA87')};
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 500px) {
    padding: 20px 30px;
    width: 335px;
  }
`;
