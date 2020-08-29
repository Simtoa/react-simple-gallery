import React from 'react'

import styles from './index.module.css'

const GalleryItem = ({ photoDetail, setLigtboxImg }) => {
  const setImg = (e, photoDetail) => {
    e.preventDefault()
    setLigtboxImg(photoDetail)
  }
  return (
    <div className={styles.galleryItem}>
      <a
        href={photoDetail.url}
        onClick={(e) => {
          setImg(e, photoDetail)
        }}
      >
        <img src={photoDetail.thumbnailUrl} alt="" />
      </a>
    </div>
  )
}

export default GalleryItem
