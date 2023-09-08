import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import TokenContext from "../../Context/TokenContext";
import Header from "../Header";
import Footer from "../Footer";
import TodayHabit from "./TodayHabit";

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
          console.log("xPercent: ", xPercent);
          setPercent(xPercent);
        }
      });
      promise.catch((err) => console.log(err.response));
    }
  }, [token, finishedHabit]);
  console.log("Percent: ", percent);

  return todayHabits === null ? (
    <p> Carregando </p>
  ) : (
    <>
      <Header />
      <Container>
        <div className="title">
          <strong></strong>
          <small>{percent}% dos hábitos concluídos.</small>
        </div>
        {todayHabits.map((habitToday) => {
          return (
            <TodayHabit
              habitToday={habitToday}
              setFinishedHabit={setFinishedHabit}
              finishedHabit={finishedHabit}
            />
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

// ------------------------css

const Container = styled.section`
  width: 100%;
  height: fit-content;
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
