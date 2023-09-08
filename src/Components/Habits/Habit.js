import styled from "styled-components";
import Swal from "sweetalert2";
import { useContext } from "react";
import axios from "axios";

import TokenContext from "../../Context/TokenContext";

export default function Habit({ habit, deleteHabit, setDeleteHabit }) {
  const { token } = useContext(TokenContext);
  function remove(id) {
    console.log("id: ", id);
    Swal.fire({
      title: "Tem certeza que deseja excluir esse hábito?",
      text: "Não será possivél reverter.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const promise = axios.delete(URL, config);
        promise.then(() => {
          Swal.fire("Excluido!", "", "success");
          setDeleteHabit(!deleteHabit);
        });
        promise.catch((err) => console.log(err.response));
      }
    });
  }

  const arrDays = [
    { numberDay: 0, nameDay: "D", selectedDay: false },
    { numberDay: 1, nameDay: "S", selectedDay: false },
    { numberDay: 2, nameDay: "T", selectedDay: false },
    { numberDay: 3, nameDay: "Q", selectedDay: false },
    { numberDay: 4, nameDay: "Q", selectedDay: false },
    { numberDay: 5, nameDay: "S", selectedDay: false },
    { numberDay: 6, nameDay: "S", selectedDay: false },
  ];

  const habitDay = habit.days;

  for (let i = 0; i < arrDays.length; i++) {
    for (let j = 0; j < habit.days.length; j++) {
      if (arrDays[i].numberDay === habitDay[j]) {
        arrDays[i].selectedDay = true;
        console.log("arrDays.selectedDay: ", arrDays.selectedDay);
        j = 10;
      }
    }
  }
  return (
    <DivHabit>
      <p>{habit.name}</p>
      <ion-icon
        onClick={() => remove(habit.id)}
        name="trash-outline"
      ></ion-icon>
      <div className="days">
        {arrDays.map((arrDay) => {
          return (
            <DivDay key={arrDay.numberDay} selected={arrDay.selectedDay}>
              {arrDay.nameDay}
            </DivDay>
          );
        })}
      </div>
    </DivHabit>
  );
}

const DivHabit = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  margin-bottom: 10px;
  filter: drop-shadow(3px 3px 3px #444444);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  ion-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }
  p {
    height: fit-content;
    width: 90%;
    font-family: "Murecho", sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
    padding: 20px 0px;
  }
  .days {
    display: flex;
    margin-left: 20px;
  }
`;
const DivDay = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: ${(props) => (props.selected ? "none" : "solid #ffa500 2px")};
  margin: 10px;
  margin-left: 0px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#4B8078" : "#ffffff")};
`;
