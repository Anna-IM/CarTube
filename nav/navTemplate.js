import authService from "../services/authService.js";
import { html } from "./../../node_modules/lit-html/lit-html.js";
import page from "./../node_modules/page/page.mjs";

async function logoutUser(user) {
    // console.log("test");
    await authService.logout(user);
    page.redirect("/home");
}

export let navTemplate = (navInfo) => html`

                <a class="active" href="/home">Home</a>
                <a href="/all-cars">All Listings</a>
                <a href="/by-year">By Year</a>
                ${navInfo.isLoggedIn
                ? loggedControls(navInfo)
                : guestControls()}`;

        let guestControls = (navInfo) => html`
                <!-- Guest users -->
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`;
        let loggedControls = (navInfo) => html`
                <!-- Logged users -->
                <div id="profile">
                    <a>Welcome ${navInfo.username}</a>
                    <a href="/my-listing">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="javascript:void(0)" @click=${logoutUser}>Logout</a>
                </div>`;