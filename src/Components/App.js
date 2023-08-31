import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "../Context/TokenContext";
import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits/Habits";
import Today from "./Today";
import History from "./History";

function App() {
  const [token, setToken] = useState();
  return (
    <DivApp>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </DivApp>
  );
}

export default App;

const DivApp = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;
