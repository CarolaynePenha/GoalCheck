import styled from "styled-components";
import { Link } from "react-router-dom";

import { Form } from "../Login/index";
import { ButtonRegisterLogin } from "../Login/index";

import Logo from "./../img/Logo1.png";

export default function Register() {
  return (
    <Conteiner>
      <img src={Logo} alt="Logo" />
      <Form>
        <input type="e-mail" required placeholder="e-mail" />
        <input type="password" required placeholder="senha" />
        <input type="text" required placeholder="nome" />
        <input type="file" required placeholder="foto" />
        <button type="submit" className="save-button">
          Entrar
        </button>
      </Form>
      <Link to={"/"}>
        <ButtonRegisterLogin>Já tem uma conta? Faça login!</ButtonRegisterLogin>
      </Link>
    </Conteiner>
  );
}

// ----------------------------------
const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
`;
