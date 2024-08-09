import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import ThemeState from './context/theme/themeState';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeState>
      <App />  
    </ThemeState>
  </React.StrictMode>,
)
