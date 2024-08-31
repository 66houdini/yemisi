import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../components/font.tsx"
// import "@/public/css/font-awesome.min.css"
import "@fortawesome/fontawesome-svg-core"
import App from "./App.tsx";
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <GlobalStyles/>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
