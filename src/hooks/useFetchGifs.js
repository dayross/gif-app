import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// un hook es una funcion que regresa algo
// en su mayoria es un objeto, este es un objeto
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect( () => {
        getImages(category);
    }, []);

    return {
        images,
        isLoading
    }
}
