import { createTemplate } from "./createTemplate.js";
import carService from "./../../services/carService.js";

async function submitHandler(context, e) {
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
        let result = await carService.create(newCar);
        context.page.redirect('/all-cars');
    }
    }catch (err) {
        window.alert(err);
    }
}

async function getView(context) {
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context);
    let form = {
        submitHandler: boundSubmitHandler
    }

    let templateResult = createTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}