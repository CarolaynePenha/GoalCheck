import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ day, saveIds, index, buttonState }) {
  const [selected, setSelected] = useState();
  return (
    <Input
      disabled={buttonState}
      selected={selected}
      onClick={() => {
        setSelected(!selected);
        saveIds(index);
      }}
      type="button"
      value={day}
    />
  );
}

// --------css

const Input = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: ${(props) => (props.selected ? "none" : "solid #ffa500 2px")};
  margin: 10px;
  margin-left: 0px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#4B8078" : "#ffffff")};
`;
