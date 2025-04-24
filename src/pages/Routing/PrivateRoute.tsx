import { Navigate, useLocation } from "react-router-dom";
import { ReactElement, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { useAuth } from "../../shared/context/AuthProvider";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const auth = useAuth();
  const location = useLocation();
  if (auth && auth.user === null)
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  return (
    <ErrorBoundary>
      <Suspense fallback={<h2>Loading...</h2>}>{children}</Suspense>
    </ErrorBoundary>
  );
};
