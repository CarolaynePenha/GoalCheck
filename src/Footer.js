import styled from "styled-components";

export default function Footer() {
  return (
    <DivFooter>
      <p>habitos</p>
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
`;
