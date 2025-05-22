// import { useLocalStorage } from './utils/customHocks/useLocalStorage.js';
// import './App.css';

// function App() {
//   const [name, setName, removeName] = useLocalStorage('name', 'guest');

//   return (
//     <>
//       <h1>Hello {name}!</h1>
//       <input
//         type="text"
//         value={name}
//         placeholder="Please enter your Name"
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={removeName}>Clear name</button>
//     </>
//   );
// }

// export default App;

import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ModalAuth from './components/ModalAuth/ModalAuth.jsx';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import PublicRoute from './components/Routing/PublicRoute.jsx';
import PrivateRoute from './components/Routing/PrivateRoute.jsx';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage/TeachersPage.jsx')
);
const FavoritesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage.jsx')
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/home"
              element={
                <PublicRoute restricted={false}>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/teachers"
              element={
                <PublicRoute restricted={false}>
                  <TeachersPage />
                </PublicRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ModalAuth />
      </Suspense>
    </div>
  );
}

export default App;
