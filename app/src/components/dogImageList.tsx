'use client'

import { useState, useEffect, useRef } from 'react';
import DogImage from './dogImage';
import getDogs from '../api/dogImages';
import styles from '../styles/dogList.module.css'

export default function DogImageList() {
    const [images, setImages] = useState([]);
    const [dogTotal, setDogTotal] = useState(20);
    const getData = async () => {
        const data = await getDogs(dogTotal)
        setImages((prev) => [...prev, ...data.message])
    }

    const handleScroll = () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 200;
        hasReachedBottom && loadMoreOnClick()
    };

    useEffect(() => {
        getData()
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [dogTotal])

    const loadMoreOnClick = () => {
        if (dogTotal > 200) return
        setDogTotal((prev) => prev + 20);
    }

    const listDogs = images.map((image, index) =>
        <div className={styles.imageWrap} key={index}><DogImage src={image} /></div>
    );

    return <div className={styles.imageList} onScroll={handleScroll}>
        {listDogs}
    </div>
}