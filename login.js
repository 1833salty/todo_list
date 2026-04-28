"use strict";

const getElement = selector => document.querySelector(selector);

const showLoginDiv = () => {
    getElement("#login").classList.remove("hide");
    getElement("#user").focus();
};

const hideLoginDiv = () => {
    getElement("#login").classList.add("hide");
    getElement("#user").value = "";
    getElement("#message").textContent = "";
};

const showLogoutDiv = () => {
    getElement("#logout").classList.remove("hide");
    getElement("#btn_logout").focus();
};

const hideLogoutDiv = () => {
    getElement("#logout").classList.add("hide");
    getElement("#name").textContent = "";
};

document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");

    if (user) {
        hideLoginDiv();
        showLogoutDiv();
        getElement("#name").textContent = user;
    } else {
        showLoginDiv();
        hideLogoutDiv();
    }

    getElement("#btn_login").addEventListener("click", () => {
        const user = getElement("#user").value.trim();

        if (user === "") {
            return;
        }

        localStorage.setItem("user", user);

        hideLoginDiv();
        showLogoutDiv();
        getElement("#name").textContent = user;
    });

    getElement("#btn_logout").addEventListener("click", () => {
        localStorage.removeItem("user");

        showLoginDiv();
        hideLogoutDiv();
    });
});