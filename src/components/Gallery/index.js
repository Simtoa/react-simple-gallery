import React, { useEffect, useState } from 'react'

import styles from './index.module.css'

//Import Components
import GalleryItem from './GalleryItem/'

const Gallery = ({ dataAddres, setLigtboxImg }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(dataAddres)
        const results = await response.json()
        setPhotos(results)
      } catch (e) {
        console.log("Hata", e)
      }
    }
    fetchPhotos()
  }, [dataAddres])

  return (
    <div className={styles.gallery}>
      {photos.map((photo) => (
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
