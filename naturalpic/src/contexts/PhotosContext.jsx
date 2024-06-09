import { createContext, useEffect, useState } from "react";

//Exportamos un contexto
export const PhotosContext = createContext()


export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([])
    const getPhotos = async () => {
        const response = await fetch("/photos.json");
        const { photos: photosdb } = await response.json()
        setPhotos(photosdb)
    }

    const setPhotos1 = id => setData(photos.map(d => d.id === id ? {...d, liked: !d.liked} : d ))
    useEffect(() => {
        getPhotos()
    }, [])
    return (

        <PhotosContext.Provider value={{ photos, setPhotos1 }}>
            {children}
        </PhotosContext.Provider>

    )
}
