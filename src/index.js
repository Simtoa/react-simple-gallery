import React from "react";
import ReactDOM from "react-dom";

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

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