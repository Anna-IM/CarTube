import { editPageTemplate } from "./editPageTemplate.js";
import carService from "./../../services/carService.js";

let form = undefined;
async function submitHandler(context, id, e) {
    e.preventDefault();
    try{
        let formData = new FormData(e.target);
        let invalidFields = "All fields are required!";
        let isInvalid = false;
    
        let brand = formData.get("brand");
        let description = formData.get("description");
        let imageUrl = formData.get("imageUrl");
        let model = formData.get("model");
        let price = Number(formData.get("price"));
        let year = Number(formData.get("year"));
    
        if (brand === "" || description === "" || imageUrl === "" || model === "" || price === "" || year === "") {
            window.alert(invalidFields);
            isInvalid = true;
        }
    
        if (price < 0) {
            window.alert("The price should be bigger than 0!");
            isInvalid = true;
        }
        if (year < 0) {
            window.alert("The year should be bigger than 0!");
            isInvalid = true;
        }
    
        if (isInvalid === false) {
            let newCar = {
                brand,
                description,
                imageUrl,
                model,
                price,
                year
            }
            let result = await carService.update(newCar, id);
            context.page.redirect(`/details/${id}`);
        }
        }catch (err) {
            window.alert(err);
        }
}

async function getView(context) {
    let id = context.params.id;
    let detailsCar = await carService.get(id);
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context, id);
    form = {
        submitHandler: boundSubmitHandler,
        values: {
            brand: detailsCar.brand,
            model: detailsCar.model,
            year: detailsCar.year,
            description: detailsCar.description,
            price: detailsCar.price,
            imageUrl: detailsCar.imageUrl
        }
    }

    let templateResult = editPageTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}