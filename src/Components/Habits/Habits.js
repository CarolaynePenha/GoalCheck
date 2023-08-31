import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Header from "./../Header";
import TokenContext from "../../Context/TokenContext";

import Plus from "./../../assets/img/plus.svg";
import Habit from "./Habit";
import Footer from "../Footer";
import NewHabit from "./NewHabit";

export default function Habits() {
  const { token } = useContext(TokenContext);
  const [habits, setHabits] = useState([
    "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar!",
  ]);
  const [newHabit, setNewHabit] = useState(false);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  useEffect(() => {
    if (token) {
      console.log("token: ", token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.get(URL, config);
      promise.then((response) => {
        const { data } = response;
        console.log(response);
        if (data.length > 0) {
          setHabits(data);
        }
      });
      promise.catch((err) => console.log(err.response));
    }
  }, [token]);

  return habits !== null ? (
    <>
      <Header />
      <Content>
        <div className="habits">
          <p>Meus hábitos</p>
          <button onClick={() => setNewHabit(true)}>
            <img src={Plus} />
          </button>
        </div>
        <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} />
        <Habit habits={habits} />
      </Content>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <Content>
        <div className="habits">
          <p>Meus hábitos</p>
          <button>
            <img src={Plus} />
          </button>
        </div>
        <p>Carregando</p>
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .habits {
    font-family: "Roboto", sans-serif;
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    color: #c37f90;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    button {
      border: solid #c37f90 2px;
      background-color: #fdb4c6;
      border-radius: 5px;
      margin-right: 20px;
      width: 40px;
      height: 35px;
    }
    p {
      margin-left: 20px;
    }
  }
`;
