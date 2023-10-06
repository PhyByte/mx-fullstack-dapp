import { useGetIsLoggedIn } from "@multiversx/sdk-dapp/hooks";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./paths";

export const AuthRedirectWrapper = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useGetIsLoggedIn();

  if (isLoggedIn) {
    return <Navigate to={ROUTES.home} />;
  }

  return <>{children}</>;
};
