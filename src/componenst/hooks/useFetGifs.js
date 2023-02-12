import {useEffect, useState} from 'react';
import {getGifs} from '../../helpers/getGifs';

export  const  useFetGifs = (categories) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {

        const newImages = await getGifs( categories );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
            getImages();
        },
        // eslint-disable-next-line
        [])

    return {
        images,
        isLoading
    }
}