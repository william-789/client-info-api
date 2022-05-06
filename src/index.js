import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* Clients
gender: bg color
Display:
- picture.large(round)
- name.title + "." + name.first + name.last 26px
- login.username 14px
- location.street + ".city + ".state + ".postcode
- email + phone + cell

"Been a client for" + registered.age + "years"
coupons redeemed (random.math)
*/
reportWebVitals();
