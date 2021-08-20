import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (detailsCar, isOwner, deleteCar) => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${detailsCar.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${detailsCar.brand}</li>
                    <li><span>Model:</span>${detailsCar.model}</li>
                    <li><span>Year:</span>${detailsCar.year}</li>
                    <li><span>Price:</span>${detailsCar.price}$</li>
                </ul>

                <p class="description-para">${detailsCar.description}</p>

                ${isOwner 
                ? html `
                <div class="listings-buttons">
                    <a href="/edit/${detailsCar._id}" class="button-list">Edit</a>
                    <a href="javascript:void(0);" class="button-list" @click=${deleteCar}>Delete</a>
                </div>`
                : ""}
            </div>
        </section>`;