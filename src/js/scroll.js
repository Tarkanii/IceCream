export const scrollHandler = () => {
    const links = document.querySelectorAll("a[href^=\\#]");
    const menu = document.querySelector(".mobile-menu");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (menu.classList.contains("is-open")) menu.classList.remove("is-open");
            const destination = link.getAttribute("href").split("#")[1];
            document.getElementById(destination).scrollIntoView({ behavior: "smooth", block: "start" });
        })
    })
}