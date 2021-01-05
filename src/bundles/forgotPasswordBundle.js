import React from 'react';
import { render } from 'react-dom';
import { ForgotPasswordPage } from '../pages';

if (window)
  render(
    <ForgotPasswordPage data={window.__DATA__} />,
    document.getElementById('app')
  );
