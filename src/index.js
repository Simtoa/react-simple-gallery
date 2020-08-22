import React, {useCallback, useState} from "react";
import ReactDOM from "react-dom";

import 'css/normalize.css'
import 'css/simtonit.css'
import 'css/app.css'

//Import Components
import Header from "./components/header/Header";
import Gallery from "./components/Gallery/Gallery";
import Lightbox from "./components/Lightbox/Lightbox";

/*
Yapı olarak galeri ile lightbox her ne kadar birbirine bağlı görünse de aslında farklı
sorumluluklar bence. Her sayfadaki her galeri lightbox ile açılmayabilir. Bazı sayfalarda
galeri hiç detay resmi açmayacak olabilir.

Bu sebepten propları oradan oraya taşımak yerine galeri ile lightbox'ı birbirinden ayırmak çok mantıklı hareket.
Ancak, App componenti içinde de tutmak ne bu örnek dışı bir projede her zaman doğru olmayabilir.

Bu durumda doğru react yaklaşımı HoC (higher order component) kullanımı oluyor. Ya da Lightbox birden fazla BAŞKA
componentin kullandığı global bir component ise o zaman onun verisini belirlemek için global state management (react
context, redux, mobX vb...) kullanılması doğru bulunuyor.
 */

// HoC versiyonu
const withLightBox = Wrapped => props => {
    const [lbState, setLbState] = useState({open: false})

    const handleImageClick = useCallback((imageDetail) => {
        setLbState({open: true, image: imageDetail})
    }, [])

    const onLightboxClose = useCallback(() => {
        setLbState({open: false, image: null})
    }, [])

    return (
        <>
            <Wrapped {...props} onImageClick={handleImageClick}/>
            {lbState.open && <Lightbox photoDetail={lbState.image} onClose={onLightboxClose}/>}
        </>
    )
}

// Bu komutla normal bir "Gallery" componentini alıyoruz ve onu görsele tıklandığı zaman
// lightbox açacak bir hale getiriyoruz.
const LightBoxGallery = withLightBox(Gallery);

const App = () => {
    return (
        <>
            <Header/>
            {
                // Read only sadece galeri gösterdiğin normal bir galeri componenti kullanımı...
                // <Gallery dataAddres="src/data/photos.json" />
            }
            { /* Lightbox ile zengilneştirilmiş HoC kullanımı. */}
            <LightBoxGallery dataAddres="src/data/photos.json"/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector("#app"));
