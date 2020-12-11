import React from 'react';
import { hydrate, render } from 'react-dom';
import Chooseproducts from '../pages/ChooseproductsPage';

if (window)
  render(
    <Chooseproducts data={window.__DATA__} />,
    document.getElementById('app')
  );
