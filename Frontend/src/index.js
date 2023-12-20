


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./Components/CartContext"; 
import { TopSellersProvider } from "./Components/TopSellersContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.render(
  
  <React.StrictMode>
    <GoogleOAuthProvider clientId="196956285530-kvnvv5jq8r4vd5voq69u0hqq1j7eat6b.apps.googleusercontent.com">
    <CartProvider>
    <TopSellersProvider>
      <App />
      </TopSellersProvider>
    </CartProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


