import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@App.tsx'
import '@index.css';
import ThemeState from '@context/theme/themeState';
// import { Scrollbars } from 'react-custom-scrollbars-2';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Scrollbars 
      thumbMinSize={50}
      universal={true}
      renderThumbVertical={() => <div className="thumb-vertical"/>}
    > */}
      <ThemeState>
        <App />    
      </ThemeState>
    {/* </Scrollbars> */}
  </React.StrictMode>,
)
