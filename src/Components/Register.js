import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { Form } from "./Login";
import { ButtonRegisterLogin } from "./Login";
import Loading from "./Loading";
import Logo from "./../assets/img/Logo1.png";

export default function Register() {
  const navigate = useNavigate();
  const [infosRegister, setInfosRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [buttonState, setButtonState] = useState(false);
  const { email, name, image, password } = infosRegister;
  const [buttonLoading, setButtonLoading] = useState("Entrar");

  function post(event) {
    event.preventDefault();
    setButtonState(true);
    setButtonLoading(<Loading />);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, infosRegister);

    promise.then((response) => {
      const { data } = response;
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err.response);
      setButtonState(false);
      setButtonLoading("Entrar");
      alert("algo deu errado,tente novamente!");
    });
  }
  return (
    <Conteiner>
      <img src={Logo} alt="Logo" />
      <Form onSubmit={post}>
        <input
          disabled={buttonState}
          type="email"
          required
          placeholder="e-mail"
          value={email}
          onChange={(e) =>
            setInfosRegister({ ...infosRegister, email: e.target.value })
          }
        />
        <input
          disabled={buttonState}
          type="password"
          required
          placeholder="senha"
          value={password}
          onChange={(e) =>
            setInfosRegister({ ...infosRegister, password: e.target.value })
          }
        />
        <input
          disabled={buttonState}
          type="text"
          required
          placeholder="nome"
          value={name}
          onChange={(e) =>
            setInfosRegister({ ...infosRegister, name: e.target.value })
          }
        />
        <input
          disabled={buttonState}
          type="url"
          required
          placeholder="foto"
          value={image}
          onChange={(e) =>
            setInfosRegister({ ...infosRegister, image: e.target.value })
          }
        />
        <button disabled={buttonState} type="submit" className="save-button">
          {buttonLoading}
        </button>
      </Form>
      <Link to={"/"}>
        <ButtonRegisterLogin disabled={buttonState}>
          Já tem uma conta? Faça login!
        </ButtonRegisterLogin>
      </Link>
    </Conteiner>
  );
}

// ----------------------------------  css
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
