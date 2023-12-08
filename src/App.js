import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader.js'

const HoldingPage = lazy(() => import('./pages/holding-page'));
const ChristmasList = lazy(() => import('./pages/christmas-list'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HoldingPage/>} />
          <Route path="/christmas-list" element={<ChristmasList/>} />
        </Routes>
      </Suspense>
    </Router>
    {/* <Header /> */}
    </>
  );
}

export default App;
