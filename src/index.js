import React from "react";
import ReactDOM from "react-dom";

//Import Components
import Header from "./components/header/Header";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Gallery />
    </>
  )
};

ReactDOM.render(<App />, document.querySelector("#app"));