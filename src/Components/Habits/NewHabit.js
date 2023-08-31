import styled from "styled-components";
import DayButton from "./DayButton";
import { useContext, useState } from "react";
import axios from "axios";

import TokenContext from "../../Context/TokenContext";

export default function NewHabit({ newHabit, setNewHabit }) {
  const arrDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { token } = useContext(TokenContext);
  const [newDaysText, setNewDaysText] = useState({
    newText: "",
    ids: [],
  });

  const { newText, ids } = newDaysText;

  function post() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
      name: newText,
      days: ids,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log({ token });
    const promise = axios.post(URL, body, config);
    promise.then((response) => {
      const { data } = response;
      console.log(data);
    });
    promise.catch((err) => console.log(err.response));
  }

  function saveIds(index) {
    const idsFilter = ids.filter((id) => {
      return index !== id;
    });
    if (idsFilter.length !== ids.length) {
      setNewDaysText({ ...newDaysText, ids: [...idsFilter] });
    } else {
      setNewDaysText({ ...newDaysText, ids: [...ids, index] });
    }
  }

  return newHabit ? (
    <DivNewHabit>
      <input
        onChange={(e) =>
          setNewDaysText({ ...newDaysText, newText: e.target.value })
        }
        className="habit-name"
        type="text"
        value={newText}
      />
      <div className="days">
        {arrDays.map((day, index) => (
          <DayButton key={index} day={day} saveIds={saveIds} index={index} />
        ))}
      </div>
      <div className="save">
        <button onClick={() => setNewHabit(!newHabit)} className="cancel">
          Cancelar
        </button>
        <button onClick={() => post()} className="save-button">
          Salvar
        </button>
      </div>
    </DivNewHabit>
  ) : (
    ""
  );
}

// -----------css
const DivNewHabit = styled.div`
  width: 95%;
  height: 150px;
  background-color: #ffffff;

  .habit-name {
    height: 45px;
    width: 90%;
    border-radius: 5px;
    border: solid #ffa500 2px;
    margin-top: 20px;
    font-family: "Murecho", sans-serif;
    font-size: 18px;
    margin-left: 30px;
  }
  /* .habit-name ::placeholder {
    color: red;
    margin-left: 20px;
  } */
  .days {
    display: flex;
    margin-left: 30px;
  }
  .save {
    display: flex;
    justify-content: flex-end;
  }
  .save button {
    border: solid #c37f90 2px;
    background-color: #fdb4c6;
    border-radius: 5px;
    margin-right: 20px;
    width: 90px;
    height: 35px;
    font-family: "Murecho", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
  }
  .save .cancel {
    border: none;
    background-color: #ffffff;
    color: #c37f90;
  }
`;
