import "../sass/main.scss";
import { scrollHandler } from "./scroll";
import { menuHandler } from "./menu";
import { sliderHandler } from "./slider";

document.addEventListener("DOMContentLoaded", () => {
    scrollHandler();
    menuHandler();
    sliderHandler();
})