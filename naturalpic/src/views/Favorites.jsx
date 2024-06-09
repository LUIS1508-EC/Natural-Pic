import { usePhotosContext } from "../contexts/PhotosContext";

const Favoritos = () => {
  const { photos } = usePhotosContext();
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3">
        {photos.map(element => element.liked && (
          <div className="photo" style={{ backgroundImage: `url(${element.src.tiny})` }} key={element.id} >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;