import React from 'react'

import styles from './Lightbox.module.scss'

const Lightbox = ({ photoDetail, onClose }) => {
  // useCallback...
  const closeLightbox = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose()
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
