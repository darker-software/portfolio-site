import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader.js'

const HoldingPage = lazy(() => import('./pages/holding-page'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path='/' element={<HoldingPage />} />
        </Routes>
      </Suspense>
    </Router>
    {/* <Header /> */}
    </>
  );
}

export default App;
