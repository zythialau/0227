import React from 'react';
import { Route, Switch } from 'wouter';
import Brochure from './pages/Brochure';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Brochure} />
    </Switch>
  );
}
