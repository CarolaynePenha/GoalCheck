import styled from "styled-components";

import LogoPequena from "./img/Logo-pequena.png";
import Dog from "./img/dog2.webp";
export default function Header() {
  return (
    <DivHeader>
      <img className="logo-pequena" src={LogoPequena} alt="Logo Pequena" />
      <img className="user" src={Dog} alt="dog" />
    </DivHeader>
  );
}

const DivHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdb4c6;
  filter: drop-shadow(3px 4px 4px #fdb4c6);
  .logo-pequena {
    width: 150px;
    height: auto;
    margin-left: 20px;
  }
  .user {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 20px;
  }
`;
