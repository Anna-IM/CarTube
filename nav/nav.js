import authService from "../services/authService.js";
import { navTemplate } from "./navTemplate.js";

function getView(context, next) {
    // console.log(context);
    let username = localStorage.getItem("username");
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        username,
        currentPage: context.pathname
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}