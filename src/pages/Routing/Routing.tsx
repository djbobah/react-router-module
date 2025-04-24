import { Route, Routes } from "react-router-dom";
import { useLazyImports } from "../../shared/lib/useLazyImports";
import { Home } from "../Home";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../../shared/components/Login";
import { NotFound } from "../NotFound";

export const Routing = () => {
  const {
    Characters,
    CharacterCardDetail,
    Locations,
    LocationCardDetail,
    Episodes,
    EpisodeCardDetail,
  } = useLazyImports();

  return (
    <div className="main-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <PrivateRoute>
              <Characters />
            </PrivateRoute>
          }
        />

        <Route
          path="/characters/:id"
          element={
            <PrivateRoute>
              <CharacterCardDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <Locations />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/:id"
          element={
            <PrivateRoute>
              <LocationCardDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/episodes"
          element={
            <PrivateRoute>
              <Episodes />
            </PrivateRoute>
          }
        />
        <Route
          path="/episodes/:id"
          element={
            <PrivateRoute>
              <EpisodeCardDetail />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
