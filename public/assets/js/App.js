import router from "./routes/Router";


function run(){
    window.addEventListener('hashchange', router);
    window.addEventListener('DOMContentLoaded', router);
    window.addEventListener('popstate', router);
}run()

