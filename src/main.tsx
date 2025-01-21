import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ListProvider from "./context/listContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </StrictMode>
);
