import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { bootstrapVisitorTracking } from "@/lib/visitorBootstrap";

bootstrapVisitorTracking();

createRoot(document.getElementById("root")!).render(<App />);
