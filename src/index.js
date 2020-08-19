import React, { useState } from "react";
import ReactDOM from "react-dom";

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

//Import Components
import Header from "./components/header/Header";
import Gallery from "./components/Gallery/Gallery";
import Lightbox from "./components/Lightbox/Lightbox";

const App = () => {
  const [lightboxImg, setLigtboxImg] = useState(null)

  return (
    <>
      <Header />
      <Gallery setLigtboxImg={setLigtboxImg} />
      {lightboxImg && <Lightbox img={lightboxImg} setLigtboxImg={setLigtboxImg} />}
    </>
  )
};

ReactDOM.render(<App />, document.querySelector("#app"));