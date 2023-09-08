import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import TokenContext from "../../Context/TokenContext";

export default function TodayHabit({
  habitToday,
  finishedHabit,
  setFinishedHabit,
}) {
  const { highestSequence, currentSequence, name, id, done } = habitToday;
  const { token } = useContext(TokenContext);

  function finished() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!done) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const promise = axios.post(URL, null, config);

      promise.then((response) => {
        const { data } = response;
        setFinishedHabit(!finishedHabit);
      });
      promise.catch((err) => console.log("err: ", err.response));
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const promise = axios.post(URL, null, config);

      promise.then((response) => {
        const { data } = response;
        setFinishedHabit(!finishedHabit);
      });

      promise.catch((err) => console.log("err: ", err.response));
    }
  }

  return (
    <>
      <Content
        finishedHabit={done}
        currentSequence={currentSequence}
        highestSequence={highestSequence}
      >
        <div className="infos-habit">
          <p className="name-habit">{name}</p>
          <div className="sequence">
            <p>Sequência atual:</p>
            <p className="currentSequence"> {currentSequence} dias.</p>
          </div>

          <div className="sequence">
            <p>Seu recorde:</p>
            <p className="highestSequence">{highestSequence} dias</p>
          </div>
        </div>
        <ion-icon onClick={() => finished()} name="checkbox"></ion-icon>
      </Content>
    </>
  );
}

// --------------------------------------   css
const Content = styled.div`
  width: 95%;
  height: fit-content;
  background-color: #ffffff;
  filter: drop-shadow(3px 3px 3px #444444);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Murecho", sans-serif;
  padding: 10px;
  margin-bottom: 10px;

  ion-icon {
    color: ${({ finishedHabit }) => (finishedHabit ? "#4B8078" : "#BFBFBF")};
    font-size: 80px;
  }
  p {
    padding: 5px 10px;
  }
  .name-habit {
    font-size: 20px;
    font-weight: 500;
    color: #b35c72;
  }
  .sequence {
    display: flex;
  }
  .currentSequence {
    color: #72a400;
  }
  .highestSequence {
    color: ${(finishedHabit, currentSequence, heighestSequence) =>
      currentSequence === heighestSequence ? "#72a400" : "#000000"};
  }
`;
