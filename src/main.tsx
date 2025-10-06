import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/App.scss';
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

