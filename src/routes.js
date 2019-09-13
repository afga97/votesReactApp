import React from 'react';

const Principal = React.lazy(() => import('./views/Principal'));
const Results = React.lazy(() => import('./views/Results'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dash', exact: true, name: 'Home' },
  { path: '/dashboard', name:'Dashboard', component: Principal },
  { path: '/results', name:'Results', component: Results }
];

export default routes;
