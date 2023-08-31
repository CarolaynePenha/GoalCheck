import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";

import "./styles/reset.css";
import "./styles/index.css";

const container = document.querySelector(".root");
const divRoot = ReactDOM.createRoot(container);
divRoot.render(<App />);
