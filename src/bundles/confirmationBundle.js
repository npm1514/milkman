import React from 'react';
import { hydrate, render } from 'react-dom';
import Confirmation from '../pages/ConfirmationPage';

if (window)
  render(
    <Confirmation data={window.__DATA__} />,
    document.getElementById('app')
  );
