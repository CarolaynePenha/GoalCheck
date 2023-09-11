import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import TokenContext from "../../Context/TokenContext";

import Plus from "./../../assets/img/plus.svg";
import Habit from "./Habit";
import Footer from "../Footer";
import NewHabit from "./NewHabit";
import Header from "./../Header";
import SecondLoading from "../SecondLoading";

export default function Habits() {
  const { token } = useContext(TokenContext);
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState(false);
  const [deleteHabit, setDeleteHabit] = useState(false);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.get(URL, config);
      promise.then((response) => {
        const { data } = response;

        setHabits(data.sort((a, b) => a.id - b.id));
      });
      promise.catch((err) => console.log(err.response));
    }
  }, [token, newHabit, deleteHabit]);

  return habits === null ? (
    <Loanding>
      <SecondLoading />
    </Loanding>
  ) : habits.length === 0 ? (
    <>
      <Header />
      <Content>
        <div className="title">
          <p>Meus hábitos</p>
          <button onClick={() => setNewHabit(true)}>
            <img src={Plus} />
          </button>
        </div>
        <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} />
        <div className="anyHabit">
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar!
          </p>
        </div>
      </Content>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <Content>
        <div className="title">
          <p>Meus hábitos</p>
          <button onClick={() => setNewHabit(true)}>
            <img src={Plus} />
          </button>
        </div>
        <NewHabit newHabit={newHabit} setNewHabit={setNewHabit} />
        <div className="habit">
          {habits.map((habit, index) => (
            <Habit
              key={index}
              habit={habit}
              deleteHabit={deleteHabit}
              setDeleteHabit={setDeleteHabit}
            />
          ))}
        </div>
      </Content>
      <Footer />
    </>
  );
}

// ------------------------------------ css
const Content = styled.section`
  width: 100%;
  height: fit-content;
  min-height: calc(100% - 160px);
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .title {
    font-family: "Roboto", sans-serif;
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    color: #c37f90;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .habit {
    width: 95%;
  }
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
    line-height: 22px;
  }
  .anyHabit {
    width: 95%;
    padding: 20px 0px;
  }
  .anyHabit p {
    margin: 10px;
  }
`;
const Loanding = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50%;
`;
