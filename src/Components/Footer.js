import styled from "styled-components";

export default function Footer() {
  return (
    <DivFooter>
      <p>habitos</p>
      <button>Hoje</button>
      <p>historico</p>
    </DivFooter>
  );
}
const DivFooter = styled.footer`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  p {
    color: #c37f90;
    font-size: 20px;
    font-weight: 500;
  }
  button {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: none;
    margin-bottom: 20px;
    background-color: #c37f90;
    font-family: "Murecho", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
`;
