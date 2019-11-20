import React, { Suspense, lazy } from 'react';

import './App.css';
import Loading from './Components/Loading/Loading';

const Bar = lazy(() => import('./Components/Charts/Bar/Bar'));
const StackedBar = lazy(() => import('./Components/Charts/Bar/StackedBar'));

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1 >Bar</h1>
      <Suspense fallback={<Loading />}>
        <Bar />
      </Suspense>
      <hr />
      <h1>StackedBar</h1>
      <Suspense fallback={<Loading />}>
        <StackedBar />
      </Suspense>
      <hr />
    </div>
  );
}

export default App;
