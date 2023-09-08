import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function Footer({ percent }) {
  if (percent === undefined) {
    percent = 0;
  }
  return (
    <DivFooter>
      <Link to={"/habitos"}>
        <button>habitos</button>
      </Link>

      <Link to={"/hoje"}>
        <button className="today">
          <CircularProgressbar
            value={percent}
            text={`Hoje`}
            styles={buildStyles({
              pathColor: "#ffffff",
              trailColor: "#c37f90",
              textColor: "#ffffff",
            })}
          />
        </button>
      </Link>
      <Link to={"/historico"}>
        <button>historico</button>
      </Link>
    </DivFooter>
  );
}

// -----------------------------------------  css
const DivFooter = styled.footer`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  z-index: 1;

  button {
    background: none;
    border: none;
    color: #c37f90;
    font-size: 20px;
    font-weight: 500;
  }
  .today {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    border: none;
    margin-bottom: 20px;
    background-color: #c37f90;
    font-family: "Murecho", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
`;
