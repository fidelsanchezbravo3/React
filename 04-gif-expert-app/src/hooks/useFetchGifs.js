import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const imgs = await getGifs( category );
        setImages( imgs );
        setIsLoading(false);
    }
    
    useEffect( () => {
        // getGifs( category )
        //     .then( setImages );
        getImages();
    }, []);
    
    return {
        images, //images: images
        isLoading
    }

}
