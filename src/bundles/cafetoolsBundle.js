import React from 'react';
import { hydrate, render } from 'react-dom';
import Cafetools from '../pages/CafetoolsPage';

if (window)
  render(
    <Cafetools data={window.__DATA__} />,
    document.getElementById('app')
  );
