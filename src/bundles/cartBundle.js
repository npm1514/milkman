import React from 'react';
import { render } from 'react-dom';
import { CartPage } from '../pages';

if (window)
  render(
    <CartPage data={window.__DATA__} />,
    document.getElementById('app')
  );
