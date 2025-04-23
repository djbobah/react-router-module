import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { NotFound } from "./components/404";
import { FormEvent } from "react";
import { DataSigninType } from "./types";
import { useAuth } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { useLazyImports } from "./hooks/useLazyImports";
import { Login } from "./components/Login";

function App() {
  const {
    Characters,
    CharacterCardDetail,
    Locations,
    LocationCardDetail,
    Episodes,
    EpisodeCardDetail,
  } = useLazyImports();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSigninSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: DataSigninType
  ) => {
    e.preventDefault();

    auth &&
      auth.signIn({
        newUser: data,
        callback: () => navigate(from, { replace: true }),
      });
  };

  return (
    <>
      <NavBar />
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
          <Route
            path="/login"
            element={<Login handleSubmit={handleSigninSubmit} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
