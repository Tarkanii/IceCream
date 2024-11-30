export const sliderHandler = () => {
    const sliderButtons = document.querySelectorAll(".slider-button");
    const selectedBtnHTML = document.querySelector(".slider-button.selected").innerHTML;

    sliderButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Removing .selected class from each button before adding it to the right one; 
            sliderButtons.forEach((button) => {
                if (button.classList.contains("selected")) {
                    button.classList.remove("selected");
                    button.innerHTML = "";
                }
            })

           
            btn.classList.add("selected");
            btn.innerHTML = selectedBtnHTML;
            const clientId = btn.getAttribute("data-id");
            document.querySelector(`[data-client=c${clientId}]`).scrollIntoView({ behavior: "smooth", block: "nearest" });
        })
    })
}