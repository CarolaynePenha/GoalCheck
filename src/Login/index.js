import styled from "styled-components";

import Logo from "./../img/Logo1.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Conteiner>
      <img src={Logo} alt="Logo" />
      <Form>
        <input required placeholder="e-mail" />
        <input required placeholder="senha" />
        <button type="submit" className="save-button">
          Entrar
        </button>
      </Form>
      <Link to={"/cadastro"}>
        <ButtonRegisterLogin>
          Não tem uma conta? Cadastre-se!
        </ButtonRegisterLogin>
      </Link>
    </Conteiner>
  );
}

// ----------------------------------
const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", sans-serif;
  img {
    width: 50%;
  }
`;
export const ButtonRegisterLogin = styled.button`
  border: none;
  color: #c37f90;
  margin-top: 30px;
  background-color: #ffffff;
`;

export const Form = styled.form`
  width: 70%;
  .save-button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #fdb4c6;
    border: solid #c37f90 2px;
    color: #ffffff;
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid #ffe3ef 2px;
    margin-top: 20px;
    background-color: #ffffff;
    font-size: 18px;
    text-align: center;
    /* ::placeholder {
      color: #ffe3ef;
    } */
  }
`;
