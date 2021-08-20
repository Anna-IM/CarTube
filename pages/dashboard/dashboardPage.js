import { dashboardTemplate } from "./dashboardTemplate.js";
import carService from "./../../services/carService.js";

async function getView(context) {
    let allCars = await carService.getAll();
    let templateResult = dashboardTemplate(allCars);
    context.renderView(templateResult);
}

export default {
    getView
}