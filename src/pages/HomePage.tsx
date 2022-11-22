import { Outlet } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default HomePage;
