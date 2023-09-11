import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loading from "./Loading";
import Logo from "./../assets/img/Logo1.png";
import TokenContext from "../Context/TokenContext";
import ImageContext from "../Context/ImageContext";

export default function Login() {
  const { token, setToken } = useContext(TokenContext);
  const { image, setImage } = useContext(ImageContext);
  const [infosLogin, setinfosLogin] = useState({ email: "", password: "" });
  const [buttonState, setButtonState] = useState(false);
  const [buttonLoading, setButtonLoading] = useState("Entrar");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/habitos");
    }
  }, [token, navigate]);

  function post(event) {
    event.preventDefault();
    setButtonState(true);
    setButtonLoading(<Loading />);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, infosLogin);

    promise.then((response) => {
      const { data } = response;

      localStorage.setItem("token", data.token);
      localStorage.setItem("image", data.image);
      setToken(data.token);
      setImage(data.image);
      navigate("/habitos");
    });

    promise.catch((err) => {
      console.log(err.response);
      setButtonState(false);
      setButtonLoading("Entrar");
      alert("Algo deu errado, tente novamente!");
    });
  }

  const { email, password } = infosLogin;

  return (
    <Conteiner>
      <img src={Logo} alt="Logo" />
      <Form onSubmit={post}>
        <input
          disabled={buttonState}
          required
          placeholder="e-mail"
          value={email}
          onChange={(e) =>
            setinfosLogin({ ...infosLogin, email: e.target.value })
          }
        />
        <input
          disabled={buttonState}
          type="password"
          required
          placeholder="senha"
          value={password}
          onChange={(e) =>
            setinfosLogin({ ...infosLogin, password: e.target.value })
          }
        />
        <button disabled={buttonState} type="submit" className="save-button">
          {buttonLoading}
        </button>
      </Form>
      <Link to={"/cadastro"}>
        <ButtonRegisterLogin disabled={buttonState}>
          Não tem uma conta? Cadastre-se!
        </ButtonRegisterLogin>
      </Link>
    </Conteiner>
  );
}

// --------------------------------------- css

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
    display: flex;
    justify-content: center;
    align-items: center;
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
