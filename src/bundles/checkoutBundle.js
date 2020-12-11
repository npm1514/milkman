import React from 'react';
import { hydrate, render } from 'react-dom';
import Checkout from '../pages/CheckoutPage';

if (window)
  render(
    <Checkout data={window.__DATA__} />,
    document.getElementById('app')
  );
