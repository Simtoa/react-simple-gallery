import React, { useEffect, useState } from 'react'

import styles from './index.module.css'

//Import Components
import GalleryItem from './GalleryItem/'

const Gallery = ({ dataAddres, setLigtboxImg }) => {
  const [galleryState, setGalleryState] = useState({ photos: [], loading: true, errorMsg: "" })


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(dataAddres)
        const results = await response.json()
        setGalleryState({ photos: results, loading: false, errorMsg: "" })
      } catch (e) {
        setGalleryState({ photos: [], loading: false, errorMsg: e.message })
      }
    }
    fetchPhotos()
  }, [dataAddres])

  return (
    <div className={styles.gallery}>
      {galleryState.loading && <p>Yükleniyor...</p>}
      {galleryState.errorMsg && <p>Hata: {galleryState.errorMsg}</p>}

      {galleryState.photos &&
        galleryState.photos.map((photo) => (
          <GalleryItem
            setLigtboxImg={setLigtboxImg}
            key={photo.id}
            photoDetail={photo}
          />
        ))}
    </div>
  )
}

export default Gallery
