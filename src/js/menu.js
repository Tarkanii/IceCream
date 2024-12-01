export const menuHandler = () => {
    const menuOpenButton = document.querySelector("#menu-open");
    const menuCloseButton = document.querySelector("#menu-close")
    const menu = document.querySelector(".mobile-menu");

    menuOpenButton.addEventListener("click", () => {
        if (!menu.classList.contains("is-open")) {
            menu.classList.add("is-open");
            setTimeout(() => menuCloseButton.focus(), 200)
        }
    })

    menuCloseButton.addEventListener("click", () => {
        if (menu.classList.contains("is-open")) {
            menu.classList.remove("is-open");
        }
    })

}

