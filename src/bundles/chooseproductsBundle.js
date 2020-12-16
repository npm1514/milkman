import React from 'react';
import { render } from 'react-dom';
import { ChooseproductsPage } from '../pages';

if (window)
  render(
    <ChooseproductsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
