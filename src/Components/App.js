import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TokenProvider } from "../Context/TokenContext";
import { ImageProvider } from "../Context/ImageContext";

import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History";

function App() {
  return (
    <DivApp>
      <ImageProvider>
        <TokenProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/hoje" element={<Today />} />
              <Route path="/historico" element={<History />} />
            </Routes>
          </BrowserRouter>
        </TokenProvider>
      </ImageProvider>
    </DivApp>
  );
}

export default App;

//  ---------------------------------- css
const DivApp = styled.div`
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 160px);
  position: relative;
`;
