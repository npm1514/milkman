import React from 'react';
import { hydrate, render } from 'react-dom';
import Cart from '../pages/CartPage';

if (window)
  render(
    <Cart data={window.__DATA__} />,
    document.getElementById('app')
  );
