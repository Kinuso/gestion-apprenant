import HomePage from "../pages/content/HomePage";
import DashboardAdminPage from "../pages/content/dashboardAdminPage";
import ViewPromPage from "../pages/content/dashboardPromo";

const ROUTES = {
  "/public/": HomePage,
  "/public/dashboardAdmin": DashboardAdminPage,
  "/public/dashboardAdmin/ViewProm": ViewPromPage,
};

export default ROUTES;
