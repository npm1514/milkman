import React from 'react';
import { render } from 'react-dom';
import { CheckoutPage } from '../pages';

if (window)
  render(
    <CheckoutPage data={window.__DATA__} />,
    document.getElementById('app')
  );
