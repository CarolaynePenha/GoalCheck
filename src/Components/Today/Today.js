import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";

import TokenContext from "../../Context/TokenContext";
import Header from "../Header";
import Footer from "../Footer";
import TodayHabit from "./TodayHabit";
import SecondLoading from "../SecondLoading";

dayjs.locale("pt-br");
dayjs.extend(updateLocale);
dayjs.updateLocale("pt-br", {
  weekdays: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
});

export default function Today() {
  const [todayHabits, setTodayHabits] = useState(null);
  const { token } = useContext(TokenContext);
  const [finishedHabit, setFinishedHabit] = useState(false);
  const [percent, setPercent] = useState();

  useEffect(() => {
    if (token) {
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.get(URL, config);
      promise.then((response) => {
        const { data } = response;
        setTodayHabits(data);

        if (data !== null) {
          let cont = 0;
          data.forEach((habitToday) => {
            if (habitToday.done) {
              cont++;
            }
          });
          const xPercent = (cont * 100) / data.length;

          setPercent(xPercent);
        }
      });
      promise.catch((err) => console.log(err.response));
    }
  }, [token, finishedHabit]);

  return todayHabits === null ? (
    <Loanding>
      <SecondLoading />
    </Loanding>
  ) : (
    <>
      <Header />
      <Container>
        <div className="title">
          <strong>{dayjs().format("dddd, DD/MM")}</strong>
          <small>
            {percent ? percent.toFixed(2) : 0}% dos hábitos concluídos.
          </small>
        </div>
        {todayHabits.map((habitToday, index) => {
          return (
            <TodayHabit
              key={index}
              habitToday={habitToday}
              setFinishedHabit={setFinishedHabit}
              finishedHabit={finishedHabit}
            />
          );
        })}
      </Container>
      <Footer percent={percent} />
    </>
  );
}

// ------------------------------------ css

const Container = styled.section`
  width: 100%;
  height: fit-content;
  min-height: calc(100% - 160px);
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .title {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  strong {
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    color: #b35c72;
  }
  small {
    padding-bottom: 30px;
    font-weight: 500;
    font-size: 16px;
    font-family: "Murecho", sans-serif;
    color: #72a400;
  }
`;
const Loanding = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50%;
`;
