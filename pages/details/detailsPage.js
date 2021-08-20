import { detailsTemplate } from "./detailsTemplate.js";
import carService from "./../../services/carService.js";
import authService from "./../../services/authService.js";

async function getView(context) {
    let id = context.params.id;
    let detailsCar = await carService.get(id);
    let boundDeleteHandler = deleteCar.bind(null, context, id);
    // detailsCar = changeUrlImage(detailsCar);
    let isOwner = authService.getUserId() === detailsCar._ownerId;
    let templateResult = detailsTemplate(detailsCar, isOwner, boundDeleteHandler);
    context.renderView(templateResult);
}
// function changeUrlImage(detailsFurniture) {
//     detailsFurniture.img = `./.${detailsFurniture.img}`;
//     return detailsFurniture;
// }
async function deleteCar(context, id) {
    let confirmed = confirm("Are you sure you want to delete the item?")
    if (confirmed) {
        await carService.deleteItem(id);
        context.page.redirect("/all-cars");
    }
}

export default {
    getView
}