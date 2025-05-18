import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeDark } from "./screens/HomeDark/HomeDark";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeDark />
  </StrictMode>,
);
