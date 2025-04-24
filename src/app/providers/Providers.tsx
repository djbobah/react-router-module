import { ReactNode } from "react";
import { AuthProvider } from "../../shared/context/AuthProvider";
import { DataProvider } from "../../shared/context/DataProvider";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <MantineProvider defaultColorScheme="dark">
            {children}
          </MantineProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
