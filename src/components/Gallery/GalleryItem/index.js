import React, {useCallback} from 'react'

import styles from './galleryItem.module.scss'

/*
Dosya adı index.js olursa import ifadelerinde galleryitem/galleryitem demek
zorunda kalmazsın. Okunmayı kolaylaştıracaktır.

Ayrıca, bu galleryitem componenti bu proje özelinde gallery componenti dışında bir yerde
kullanılabilir bir component olmadığı için (bknz: gallery spesifik komutları olması)
Bu componentin hiyerarşik olarak Gallery componentinin içerisinde olması daha doğru.
*/

const GalleryItem = ({photoDetail, onImageClick}) => {

    // Bu şekilde tanımladığın bir metod, component her render olduğunda gereksiz yere
    // yeniden tanımlanacaktır.
    /*const setImg = (e, photoDetail) => {
      e.preventDefault()
      setLigtboxImg(photoDetail)
    }*/

    // Dışarıdan çağıran tarafın bir imaja tıklandığında ne yapacağına karar vermesini
    // sağlamak doğru component tasarımıdır. Lightbox açan kodu da bu component içine
    // gömmediğin sürece bu componentin tek sorumluluğu imajları galeri olarak göstermek
    // ve parent tarafına bir imaja tıklandığını bildirmek olmalı. SRP (Single Responsibility Principle)
    // Bu component tek bir imajı göstermek ve ona tıklandığını handle etmekle ilgilendiği için
    // lightbox tarafı ile bağını koparmalıyız.
    // Bu yüzden component prop olarak onImageClick callback alıyoruz.

    /*
    setImg fonksiyonu ile aynı işi yapıyoruz ama bu şekilde tanımlandığında her renderda değil
    sadece onImageClick ya da photoDetail değerleri değiştiğinde bu fonksiyon yeniden
    tanımlanıyor.
     */
    const onClickCallback = useCallback((e) => {
        e.preventDefault();
        if (onImageClick) {
            onImageClick(photoDetail)
        }
    }, [onImageClick, photoDetail])

    return (
        <div className={styles.galleryItem}>
            <a
                href={photoDetail.url}
                onClick={onClickCallback}
            >
                <img src={photoDetail.thumbnailUrl} alt=""/>
            </a>
        </div>
    )
}

export default GalleryItem
