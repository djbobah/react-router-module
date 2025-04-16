import { lazy, useCallback } from "react";

export const useLazyImports = () => {
  const Characters = useCallback(
    lazy(() =>
      import("../pages/Characters.tsx").then((module) => ({
        default: module.Characters,
      }))
    ),
    []
  );

  const CharacterCardDetail = lazy(() =>
    import("../components/CharacterCardDetail.tsx").then((module) => ({
      default: module.CharacterCardDetail,
    }))
  );

  const Locations = lazy(() =>
    import("../pages/Locations.tsx").then((module) => ({
      default: module.Locations,
    }))
  );

  const LocationCardDetail = lazy(() =>
    import("../components/LocationCardDetail.tsx").then((module) => ({
      default: module.LocationCardDetail,
    }))
  );
  const Episodes = lazy(() =>
    import("../pages/Episodes.tsx").then((module) => ({
      default: module.Episodes,
    }))
  );

  const EpisodeCardDetail = lazy(() =>
    import("../components/EpisodeCardDetail.tsx").then((module) => ({
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
