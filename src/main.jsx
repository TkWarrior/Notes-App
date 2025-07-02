import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { NotesProvider } from './context/NotesContext'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <Navbar/>
        <App />
      </NotesProvider>
    </BrowserRouter>
  </StrictMode>
);
