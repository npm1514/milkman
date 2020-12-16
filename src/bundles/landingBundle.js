import React from 'react';
import { render } from 'react-dom';
import { LandingPage } from '../pages';

if (window)
  render(
    <LandingPage data={window.__DATA__} />,
    document.getElementById('app')
  );
