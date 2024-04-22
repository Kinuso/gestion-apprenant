import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Page404 from "../pages/content/404Page";
import ROUTES from "./Routes";

function router() {

  const content = document.getElementById("app");
  const path = window.location.pathname.replace("/SPA/public", "");

  let pageContent = ROUTES[path];

  if (pageContent instanceof Function) {
    pageContent = pageContent();
  } else {
    pageContent = Page404();
  }

  content.innerHTML = Header() + pageContent + Footer();

  content.querySelectorAll(".nav_link").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.pushState({}, "", e.target.href);
      router();
    });
  });
}

export default router;
