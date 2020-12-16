import React from 'react';
import { render } from 'react-dom';
import { SignupLoginPage } from '../pages';

if (window)
  render(
    <SignupLoginPage data={window.__DATA__} />,
    document.getElementById('app')
  );
