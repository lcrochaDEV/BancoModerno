import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes  from './AppRoutes.tsx'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   /* -----------------------------------------------------------
       CSS - ESTILO VISUAL (DARK INDUSTRIAL/NEON BLUE)
       ----------------------------------------------------------- */
    :root {
      --bg-color: #0f111a;        /* Fundo principal */
      --sidebar-color: #161925;  /* Fundo do menu lateral */
      --accent-color: #00d4ff;   /* Azul Neon principal */
      --card-bg: #1c2130;        /* Fundo dos cards e seções */
      --text-primary: #ffffff;   /* Texto principal */
      --text-secondary: #94a3b8; /* Texto secundário */
      --border-color: #2d3748;   /* Cor das bordas */
      --neon-shadow: 0 0 15px rgba(0, 212, 255, 0.4);

      --animation: fadeIn 0.5s ease;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-primary);
      min-height: 100vh;
      overflow: hidden; /* Impede scroll no body, o scroll será nas seções */
    }
    
    /* Estilização básica das Seções */
    section {
      animation: fadeIn 0.5s ease;
      background: var(--card-bg, #1a1a1a);
      padding: 2.5rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      max-width: 400px;
      width: 100%;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid var(--accent-color);
      display: inline-block;
      padding-bottom: 5px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
`;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>
)
