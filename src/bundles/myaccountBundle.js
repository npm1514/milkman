import React from 'react';
import { render } from 'react-dom';
import { MyaccountPage } from '../pages';

if (window)
  render(
    <MyaccountPage data={window.__DATA__} />,
    document.getElementById('app')
  );
