import { NavBar } from "../widgets/NavBar";
import { Providers } from "./providers";
import { Routing } from "../pages";

import "./styles/index.css";
import "@mantine/core/styles.css";

export function App() {
  return (
    <Providers>
      <NavBar />
      <Routing />
    </Providers>
  );
}
