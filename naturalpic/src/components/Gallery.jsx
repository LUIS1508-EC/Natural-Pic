import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
import IconHeart from "./IconHeart";
import "./gallery.css"

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);
  const changeFavorite = (id) => {
    photos.map((photos) => {
      if (photos.id === id)
        setPhotos([photos], (photos.liked = !photos.liked));
    });
  };
  return (
    <div>
      <div className="gallery grid-columns-5 p-3">
        {photos.map(element => (
          <div className="photo" style={{ backgroundImage: `url(${element.src.tiny})` }} key={element.id}> 
              <IconHeart filled={element.liked} id={element.id} />
              <p>{element.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
