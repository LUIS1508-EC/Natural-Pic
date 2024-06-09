
import { usePhotosContext } from "../contexts/PhotosContext";
import IconHeart from "./IconHeart";
import "./gallery.css"

const Gallery = () => {
  const {photos} = usePhotosContext();
  
  return (
    <div>
      <div className="gallery grid-columns-5 p-3">
        {photos.map(element => (
          <div className="photo" style={{ backgroundImage: `url(${element.src.tiny})` }} key={element.id}> 
              <IconHeart filled={element.liked} id={element.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
