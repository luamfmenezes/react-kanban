import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
