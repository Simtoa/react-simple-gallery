import React, {useEffect, useState} from 'react'

import styles from './Gallery.module.css'

//Import Components
import GalleryItem from '../GalleryItem/GalleryItem'

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
        <GalleryItem
          key={photo.id}
          url={photo.url}
          thumbnailUrl={photo.thumbnailUrl}
        />
      ))}
    </div>
  )
}

export default Gallery
