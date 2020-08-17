import React from 'react'

const GalleryItem = ({url, thumbnailUrl}) => {
  return (
    <a href={url}>
      <img src={thumbnailUrl} alt="" />
    </a>
  )
}

export default GalleryItem
