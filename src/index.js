import React from "react";
import ReactDOM from "react-dom";

//Import Components
import Header from "./components/header/Header";

const App = () => {
  return (
    <Header />
  )
};

ReactDOM.render(<App />, document.querySelector("#app"));