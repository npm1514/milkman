import React from 'react';
import { render } from 'react-dom';
import { CafetoolsPage } from '../pages';

if (window)
  render(
    <CafetoolsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
