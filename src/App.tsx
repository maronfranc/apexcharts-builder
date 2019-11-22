import React, { Suspense, lazy } from 'react';

import './App.css';
import Loading from './Components/Loading/Loading';
import DinamicallyLoadedBar from './Components/Charts/Mixed/DinamicallyLoadedCharts';
import Mixed from './Components/Charts/Mixed/Mixed';

const Bar = lazy(() => import('./Components/Charts/Bar/Bar'));
const Pie = lazy(() => import('./Components/Charts/Pie/Pie'));
const StackedBar = lazy(() => import('./Components/Charts/Bar/StackedBar'));



const App: React.FC = () => {
  return (
    <div className={"App"}>
      <Suspense fallback={<Loading />}>
        <Mixed />
      </Suspense>
      {/* <h1>DinamicallyLoadedBar</h1>
      <Suspense fallback={<Loading />}>
        <DinamicallyLoadedBar />
      </Suspense>
      <hr />
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
      <h1>Pie</h1>
      <Suspense fallback={<Loading />}>
        <Pie />
      </Suspense>
      <hr /> */}
    </div>
  );
}

export default App;
