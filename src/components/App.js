import './App.css';
import Header from './header.js';
import {BrowserRouter as Router, Routes, Route, useLoaderData} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './loader.js'

const HoldingPage = lazy(() => import('../pages/holding-page'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path='/' element={<HoldingPage />} />
          <Route path='/*' element={<HoldingPage />} />
        </Routes>
      </Suspense>
    </Router>
    {/* <Header /> */}
    </>
  );
}

export default App;
