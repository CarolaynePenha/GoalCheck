import { useState, useEffect } from "react";
import Habit from "./Habits/Habit";
import axios from "axios";

export default function Today({ token }) {
  const [todayHabits, setTodayHabits] = useState(null);
  useEffect(() => {
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
      console.log(response);
      setTodayHabits(data);
    });
    promise.catch((err) => console.log(err.response));
  }, []);

  return todayHabits === null ? (
    <p> Carregando </p>
  ) : (
    <Habit habits={todayHabits} />
  );
}
