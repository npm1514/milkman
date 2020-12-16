import React from 'react';
import { render } from 'react-dom';
import { ConfirmationPage } from '../pages';

if (window)
  render(
    <ConfirmationPage data={window.__DATA__} />,
    document.getElementById('app')
  );
