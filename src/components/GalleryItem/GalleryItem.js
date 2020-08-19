import React from 'react'

import styles from './GalleryItem.module.css'

const GalleryItem = ({ url, thumbnailUrl, setLigtboxImg }) => {
  const setImg = (e, url) => {
    e.preventDefault()
    setLigtboxImg(url)
  }
  return (
    <div className={styles.galleryItem}>
      <a
        href={url}
        onClick={(e) => {
          setImg(e, url)
        }}
      >
        <img src={thumbnailUrl} alt="" />
      </a>
    </div>
  )
}

export default GalleryItem
