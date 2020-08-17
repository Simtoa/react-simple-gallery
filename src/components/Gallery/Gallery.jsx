import React, {useEffect, useState} from 'react'

import styles from './Gallery.module.css'

const Gallery = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('src/data/photos.json')
      const results = await response.json()
      setPhotos(results)
    }
    fetchPhotos()
  }, [])

  return (
    <div className={styles.gallery}>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
