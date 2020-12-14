import React from 'react';
import { hydrate, render } from 'react-dom';
import Signup from '../pages/SignupPage';

if (window)
  render(
    <Signup data={window.__DATA__} />,
    document.getElementById('app')
  );
