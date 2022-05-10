import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
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