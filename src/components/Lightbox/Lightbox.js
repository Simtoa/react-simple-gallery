import React from 'react'

import styles from './Lightbox.module.css'

const Lightbox = ({ photoDetail, setLigtboxImg }) => {
  const closeLightbox = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      setLigtboxImg(null)
    }
  }
  return (
    <div className={styles.overlay} onClick={closeLightbox}>
      <div className={styles.imgContainer}>
        <img src={photoDetail.url} alt="" />
        <div className={styles.title}>{photoDetail.title}</div>
      </div>
    </div>
  )
}

export default Lightbox
