import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const routes = {
    '/': HomePage,
    '/about': AboutPage,
}

const DEFAULT_URL = window.location.origin + '/public';

const config = {
    routes,
    DEFAULT_URL
}

export default config;