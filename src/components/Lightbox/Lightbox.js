import React from 'react'

import styles from './Lightbox.module.css'

const Lightbox = ({ img, setLigtboxImg }) => {
  const closeLightbox = (e) => {
    console.log("aa", e.target)
    if (e.target.classList.contains(styles.overlay)) {
      setLigtboxImg(null)
    }
  }
  return (
    <div className={styles.overlay} onClick={closeLightbox}>
      <img src={img} alt="" />
    </div>
  )
}

export default Lightbox
