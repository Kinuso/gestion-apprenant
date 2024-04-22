import config from "../config/config";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname.replace("/public", "");
  let pageContent = config.routes[path];

  if (pageContent instanceof Function) {
    pageContent = pageContent();
  }

  content.innerHTML =
    Header() + pageContent + Footer() || "<h1>404 Page Not Found</h1>";

  content.querySelectorAll(".nav_link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.history.pushState({}, "", this.getAttribute("href"));
      router();
    });
  });
}

export default router;
