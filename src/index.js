import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/sjh.scss'; //scss는 반드시 컴포넌트 import
import 'bootstrap/dist/css/bootstrap.min.css';

import Work from './Portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Work></Work>
  </>
);