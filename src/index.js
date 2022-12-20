import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
  <Auth0Provider
    domain="dev-gedi5inljjx0hfgp.us.auth0.com"
    clientId="kAU4ojNIstRa18y5QaW6ZOJWdkimhBE8"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

