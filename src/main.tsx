import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@carbon/styles/css/styles.css";

// Ensure Carbon themes are loaded by setting initial theme
document.documentElement.setAttribute("data-carbon-theme", "white");
document.documentElement.classList.add("cds--white");
document.body.classList.add("cds--white");

createRoot(document.getElementById("root")!).render(<App />);
