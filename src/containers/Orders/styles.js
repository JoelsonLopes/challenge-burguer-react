import styled from "styled-components";


import Background from "../../assets/background.svg";

export const Container = styled.div`
  //background: url("${Background}");
  //background-size: cover;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;

`;

export const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 15px;
  width: 342px;
  height: 354px;
`;

export const H1 = styled.h1`
  color: white;
  margin-bottom: 50px;

  font-size: 28px;
  font-weight: 700px;
  line-height: 33px;
  letter-spacing: 0px;
  text-align: center;
`;



export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 56, 86, 1);
  color: white;
  font-size: 20px;
  font-family: roboto;
  font-weight: 900px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const Orders = styled.li`
  margin-top: 15px;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  border: none;
  width: 340px;
  height: 60px;
  background: rgba(255, 255, 255, 0.25);
  //padding-left: 25px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300px;
  line-height: 21px;
  letter-spacing: 0px;
  color: white;

  button {
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
  }
  
`;
