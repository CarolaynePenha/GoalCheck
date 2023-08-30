import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register/Register";
import Habits from "./Habits/Habits";
import Today from "./Today";
import History from "./History";
import Header from "./Header";

function App() {
  const [token, setToken] = useState();
  return (
    <DivApp>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login saveToken={(token) => setToken(token)} />}
          />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits token={token} />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
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
