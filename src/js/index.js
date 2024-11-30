import "../sass/main.scss";
import { menuHandler } from "./menu";
import { sliderHandler } from "./slider";

document.addEventListener("DOMContentLoaded", () => {
    menuHandler();
    sliderHandler();
})