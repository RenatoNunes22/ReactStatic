import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Cardapio from "./pages/Cardapio";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Cardapio />
  </StrictMode>
);
