'use client'

import { Suspense } from 'react';
import { Img } from 'react-image'
import MoonLoader from 'react-spinners/MoonLoader'
import styles from '../styles/dogList.module.css'

export default function DogImage({ src }) {
    return <Suspense>
        <Img src={src} loader={<div className={styles.loader}>
            <MoonLoader
                color="#358ce6"
                loading
                size={30}
                speedMultiplier={1}
            />
        </div>} />
    </Suspense>
}