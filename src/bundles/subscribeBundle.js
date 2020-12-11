import React from 'react';
import { hydrate, render } from 'react-dom';
import Subscribe from '../pages/SubscribePage';

if (window)
  render(
    <Subscribe data={window.__DATA__} />,
    document.getElementById('app')
  );
