import { searchTemplate } from "./searchTemplate.js";
import carService from "./../../services/carService.js";

async function getView(context) {
    let currentSearch = "";
    const onChange = (e) => {
        currentSearch = e.target.value;
    }
    const onClick = (e) => {
        let year = Number(currentSearch);

        let myCar = carService.search(year)
        .then(cars => {
            context.renderView(searchTemplate(onChange, onClick, cars))
        })
    }
    
    context.renderView(searchTemplate(onChange, onClick));
}

export default {
    getView
}