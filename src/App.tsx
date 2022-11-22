import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';

import DefaultLayout from 'components/layout/DefaultLayout';
import ColumnPage from 'pages/ColumnPage';
import MyRecordPage from 'pages/MyRecordPage';
import TopPage from 'pages/TopPage';
import NotFound from 'pages/NotFound';
import Development from 'pages/Development';
import { ROUTES } from 'constants/routes';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTES.DEVELOPMENT} element={<Development />} />
      <Route path={ROUTES.TOP} element={<DefaultLayout />}>
        <Route path={ROUTES.COLUMN} element={<ColumnPage />} />
        <Route path={ROUTES.MY_RECORD} element={<MyRecordPage />} />
        <Route index element={<TopPage />} />
      </Route>
    </Routes>
  );
}

export default App;
