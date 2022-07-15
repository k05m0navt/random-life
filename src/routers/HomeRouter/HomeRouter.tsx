import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';

function HomeRouter(): JSX.Element {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
          (
            <Suspense fallback={<p>Loading...</p>}>
              <route.page />
            </Suspense>
          )
        }
        />
      ))}
    </Routes>
  );
}

export default HomeRouter;
