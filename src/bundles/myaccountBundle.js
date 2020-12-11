import React from 'react';
import { hydrate, render } from 'react-dom';
import Myaccount from '../pages/MyaccountPage';

if (window)
  render(
    <Myaccount data={window.__DATA__} />,
    document.getElementById('app')
  );
