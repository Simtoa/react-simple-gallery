import React from 'react'

import styles from './GalleryItem.module.css'

const GalleryItem = ({url, thumbnailUrl}) => {
  return (
    <div className={styles.galleryItem}>
      <a href={url}>
        <img src={thumbnailUrl} alt="" />
      </a>
    </div>
  )
}

export default GalleryItem
