import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root-0')
);

const getActiveRule = (hash: string) => (location: any) =>
  location.hash.startsWith(hash);
registerMicroApps([
  {
    name: 'viteApp', // app name registered
    entry: '//localhost:3000/',
    container: '#container',
    activeRule: getActiveRule('#/app-react'),
  },
  // {
  //   name: 'vueApp',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#container',
  //   activeRule: '/app-2',
  // },
]);

start();
