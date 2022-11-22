import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import ColumnPage from "pages/ColumnPage";
import MyRecordPage from "pages/MyRecordPage";
import TopPage from "pages/TopPage";
import NotFound from "pages/NotFound";
import { ROUTES } from "constants/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTES.HOME} element={<HomePage />}>
        <Route path={ROUTES.TOP} element={<TopPage />} />
        <Route path={ROUTES.COLUMN} element={<ColumnPage />} />
        <Route path={ROUTES.MY_RECORD} element={<MyRecordPage />} />
        {/* <Route index element={<HomePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
