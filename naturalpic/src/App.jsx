import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favoritos from "./views/Favorites";
import Home from "./views/Home";


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favoritos" element={<Favoritos />}
        />
      </Routes>
    </div>
  );
};
export default App;
