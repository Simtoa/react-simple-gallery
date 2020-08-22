import React, {useEffect, useState} from 'react'

import styles from './Gallery.module.scss'

//Import Components
import GalleryItem from './GalleryItem'

/*
Component olarak bu bir gallery ise, prop olarak ya galeri öğelerini almalı
ya da bu öğeleri yükleyeceği adresi dışarıdan almalı.

Bu componenti tekrar kullanmak istediğin yerlerde eğer galeri öğelerin farklı
ya da galeri veri adresin değişik ise kod tekrarı yapman ya da farklı şekilde
veriyi çekeceğin yeri özelleştirmen gerekecektir.
*/

const Gallery = ({dataAddres, onImageClick}) => {
    // Tüm galeriye ait verinin yüklenmesini beklediğini kullanıcıya göstermen gerekir.
    const [galleryState, setGalleryState] = useState({photos: [], loading: true, error: false})

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Hata kontrolü mutlaka yapılmalı.
                const response = await fetch(dataAddres)
                const results = await response.json()
                setGalleryState({photos: results, loading: false, error: false});
            } catch (e) {
                setGalleryState({photos: [], loading: false, error: true});
            }
        }
        fetchPhotos()
    }, [dataAddres])

    return galleryState.error ? <h1>Hata :(</h1> : (
        <div className={styles.gallery}>
            {galleryState.loading && <p>Galeri yükleniyor...</p>}
            {!galleryState.loading && galleryState.photos.map((photo) => (
                <GalleryItem
                    onImageClick={onImageClick}
                    key={photo.id}
                    photoDetail={photo}
                />
            ))}
        </div>
    )
}

export default Gallery
