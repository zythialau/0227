import React from 'react';
import { Route, Switch } from 'wouter';
import Brochure from './pages/Brochure';

export default function App() {
  return (
    <Switch>
      {/* 統一交給我們剛剛升級的終極大腦 Brochure 去處理！ */}
      <Route path="/" component={Brochure} />
    </Switch>
  );
}