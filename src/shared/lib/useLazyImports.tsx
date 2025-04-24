import { lazy, useCallback } from "react";

export const useLazyImports = () => {
  const Characters = useCallback(
    lazy(() =>
      import("../../pages/Characters").then((module) => ({
        default: module.Characters,
      }))
    ),
    []
  );

  const CharacterCardDetail = lazy(() =>
    import("../../pages/CharacterCardDetail").then((module) => ({
      default: module.CharacterCardDetail,
    }))
  );

  const Locations = lazy(() =>
    import("../../pages/Locations").then((module) => ({
      default: module.Locations,
    }))
  );

  const LocationCardDetail = lazy(() =>
    import("../../pages/LocationCardDetail").then((module) => ({
      default: module.LocationCardDetail,
    }))
  );
  const Episodes = lazy(() =>
    import("../../pages/Episodes").then((module) => ({
      default: module.Episodes,
    }))
  );

  const EpisodeCardDetail = lazy(() =>
    import("../../pages/EpisodeCardDetail").then((module) => ({
      default: module.EpisodeCardDetail,
    }))
  );

  return {
    Characters,
    CharacterCardDetail,
    Locations,
    LocationCardDetail,
    Episodes,
    EpisodeCardDetail,
  };
};
