

export const getImagen = async( key = 'WJe3H5k65nBkC23Vg4WPO3UV8dr7ZTjS' ) => {

    try {

        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ key }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error);
        return 'No se encontro la imagen';
    }
}



