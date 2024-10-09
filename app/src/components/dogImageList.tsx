'use client'

import { useState, useEffect } from 'react';
import DogImage from './dogImage';
import getDogs from '../api/dogImages';
import styles from '../styles/dogList.module.css'

export default function DogImageList() {
    const [images, setImages] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDogs(20)
            setImages(data.message)
        }
        getData()
    }, [])

    const listDogs = images.map((image) =>
        <div className={styles.imageWrap} key={Math.floor(Math.random() * 100)}><DogImage src={image} /></div>
    );

    return <div className={styles.imageList}>
        {listDogs}
    </div>
}