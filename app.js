import page from "./../node_modules/page/page.mjs";
import nav from "./nav/nav.js";
import allCarsPage from "./pages/allCars/allCarsPage.js";
import createPage from "./pages/create/createPage.js";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import detailsPage from "./pages/details/detailsPage.js";
import editPage from "./pages/edit/editPage.js";
import loginPage from "./pages/login/loginPage.js";
import myCarPage from "./pages/myCar/myCarPage.js";
import registerPage from "./pages/register/registerPage.js";
import searchPage from "./pages/searchCar/searchPage.js";
import renderingMiddleware from "./rendering/renderingMiddleware.js";

let appContainer = document.getElementById("site-content");
let navContainer = document.getElementById("navigation");
renderingMiddleware.initialize(appContainer, navContainer);

page("/index.html", "/home");
page("/", "/home");

page("/home", renderingMiddleware.decorateContext, nav.getView, dashboardPage.getView);
page("/login", renderingMiddleware.decorateContext, nav.getView, loginPage.getView);
page("/register", renderingMiddleware.decorateContext, nav.getView, registerPage.getView);
page("/all-cars", renderingMiddleware.decorateContext, nav.getView, allCarsPage.getView);
page("/create", renderingMiddleware.decorateContext, nav.getView, createPage.getView);
page("/details/:id", renderingMiddleware.decorateContext, nav.getView, detailsPage.getView);
page("/edit/:id", renderingMiddleware.decorateContext, nav.getView, editPage.getView);
page("/my-listing", renderingMiddleware.decorateContext, nav.getView, myCarPage.getView);
page("/by-year", renderingMiddleware.decorateContext, nav.getView, searchPage.getView);

page.start();