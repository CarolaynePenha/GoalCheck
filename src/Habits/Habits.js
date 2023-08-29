import styled from "styled-components";

import Header from "../Header";

import Plus from "./../img/plus.svg";
import Habit from "./Habit";
import Footer from "../Footer";

export default function Habits() {
  return (
    <>
      <Header />
      <Content>
        <div className="habits">
          <p>Meus hábitos</p>
          <button>
            <img src={Plus} />
          </button>
        </div>
        <Habit />
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .habits {
    font-family: "Roboto", sans-serif;
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    color: #c37f90;
    display: flex;
    justify-content: space-between;
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
    }
  }
`;
