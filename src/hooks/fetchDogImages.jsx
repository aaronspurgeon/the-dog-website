import { useState, useEffect } from 'react';
import Axios from 'axios';


export function useDogImages(breed, count) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages([])
        Axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
        .then(res => {
            setImages(res.data.message)
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }, [breed, count])

    return [images, setImages]
}