import React from 'react';
import { hydrate, render } from 'react-dom';
import Login from '../pages/LoginPage';

if (window)
  render(
    <Login data={window.__DATA__} />,
    document.getElementById('app')
  );
