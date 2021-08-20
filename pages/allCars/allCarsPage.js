import { allCarsTemplate } from "./allCarsTemplate.js";
import carService from "./../../services/carService.js";

async function getView(context) {
    let allCars = await carService.getAll();
    console.log(allCars)
    let templateResult = allCarsTemplate(allCars);
    context.renderView(templateResult);
}

export default {
    getView
}