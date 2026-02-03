import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { RouterProvider } from "react-router-dom";
import router from "./routes/root";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
