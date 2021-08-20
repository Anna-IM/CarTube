import { allMyCarTemplate } from "./myCarTemplate.js";
import authService from "../../services/authService.js";
import carService from "./../../services/carService.js";

async function getView(context) {
    let id = authService.getUserId();
    let myCar= await carService.getMyCar(id);
    let templateResult = allMyCarTemplate(myCar);
    context.renderView(templateResult);
}

export default {
    getView
}