import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
const Favoritos = () => {
  const { photos } = useContext(PhotosContext);
  return (
    <div>
      <h1>
        Fotos Favoritas
      </h1>
      <div className="p-3 gallery grid-columns-4">
        {photos.filter((element) => element.liked == true).map((element) => (
          <div key={element.id}></div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;