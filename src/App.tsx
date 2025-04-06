import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";
import { CharacterCardDetail } from "./components/CharacterCardDetail";
import { LocationCardDetail } from "./components/LocationCardDetail";
import { EpisodeCardDetail } from "./components/EpisodeCardDetail";
import { NotFound } from "./components/404";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterCardDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationCardDetail />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeCardDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
