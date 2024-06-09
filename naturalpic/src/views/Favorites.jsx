import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
const Favoritos = () => {
  const { photos } = useContext(PhotosContext);
  return (
    <div>
      <h1 className="text-green-500 text-center text-4xl p-6">
        Fotos Favoritas
      </h1>
      <div className="flex flex-wrap" id="picturesContainer">
        {photos.filter((photos) => photos.liked == true).map((photos) => (
          <div className="p-1 bg-white-500 picture" key={photos.id}>
            <img src={photos.src.tiny} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;