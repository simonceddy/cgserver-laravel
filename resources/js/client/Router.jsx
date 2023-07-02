import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import Page from './components/Page';
import PageHeading from './components/PageHeading';

function Router() {
  return (
    <Routes>
      {routes.map(({ path, key, label }) => (
        <Route
          key={key}
          path={path}
          element={(
            <Page>
              <PageHeading>
                {label}
              </PageHeading>
            </Page>
          )}
        />
      ))}
    </Routes>
  );
}

export default Router;
