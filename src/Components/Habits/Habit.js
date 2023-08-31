import styled from "styled-components";

export default function Habit({ habits }) {
  return habits.map((habit, index) => {
    return (
      <DivHabit key={index}>
        <p>{habit}</p>
      </DivHabit>
    );
  });
}

const DivHabit = styled.div`
  width: 100%;
  height: fit-content;
  p {
    font-family: "Murecho", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin: 20px;
  }
`;
