import React, { useState } from "react";
import ReactDOM from "react-dom";

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

//Import Components
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";

const App = () => {
  const [lightboxImg, setLigtboxImg] = useState(null)

  return (
    <>
      <Header />
      <Gallery dataAddres="src/data/photos.json" setLigtboxImg={setLigtboxImg} />
      {lightboxImg && <Lightbox photoDetail={lightboxImg} setLigtboxImg={setLigtboxImg} />}
    </>
  )
};

ReactDOM.render(<App />, document.querySelector("#app"));