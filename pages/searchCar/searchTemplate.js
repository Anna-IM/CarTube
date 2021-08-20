import { html } from "./../../node_modules/lit-html/lit-html.js";

export let carTemplate = (car) => html`
              <div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`;

export let searchTemplate = (onChange, onClick, allCars = []) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year" @change=${onChange}>
                <button class="button-list" @click=${onClick}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">

                <!-- Display all records (if any) -->
                
            ${allCars.length > 0
            ? allCars.map((f) => carTemplate(f))
            : html`<p class="no-cars"> No results.</p>`}
            </div>
        </section>`;

    
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