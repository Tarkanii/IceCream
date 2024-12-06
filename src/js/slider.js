let slider;
let sliderButtons;

export const sliderHandler = () => {
    slider = document.querySelector(".slider");
    sliderButtons = document.querySelectorAll(".slider-button");
    const slides = document.querySelectorAll(".review-list__element");

    sliderButtons.forEach((button, index) => sliderButtonHandler(button, index));
    slides.forEach((slide, index) => slideHandler(slide, index, slides.length));
}

function sliderButtonHandler (button, index) {
    button.addEventListener("click", () => {
        setSelectedButton(index);
        slider.querySelector(`[data-index="${index}"]`).scrollIntoView({ behavior: "smooth", block: "nearest" });
    })
}

function slideHandler (slide, index, slidesCount) {
    let isGrabbing = false;
    let currentX = 0;
    let startX = 0;

    const slider = document.querySelector(".slider");
    slide.setAttribute("data-index", index);

    // Prevent dragging picture
    slide.querySelector("img").addEventListener("dragstart", (e) => e.preventDefault())

    // Touch events
    slide.addEventListener("touchstart", (e) => dragStart(e));
    slide.addEventListener("touchmove", (e) => dragMove(e));
    slide.addEventListener("touchend", dragStop);

    // Mouse events
    slide.addEventListener("mousedown", (e) => dragStart(e));
    slide.addEventListener("mousemove", (e) => dragMove(e));
    slide.addEventListener("mouseleave", dragStop);
    slide.addEventListener("mouseup", dragStop);

    function dragStart (e) {
        isGrabbing = true;
        slide.classList.add("grabbing");
        startX = getX(e);
    }

    function dragMove (e) {
        if (!isGrabbing) return;
        currentX = getX(e);
        slide.style.transform = `translateX(${currentX - startX}px)`;
    }

    function dragStop () {
        if (!isGrabbing) return;
        isGrabbing = false;
        slide.classList.remove("grabbing");
        if (currentX - startX < 0 && Math.abs(currentX - startX) > 100 && index + 1 < slidesCount) {
            setSelectedButton(index + 1);
            slider.querySelector(`[data-index="${index + 1}"]`).scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        if (currentX - startX > 0 && Math.abs(currentX - startX) > 100 && index - 1 >= 0) {
            setSelectedButton(index - 1);
            slider.querySelector(`[data-index="${index - 1}"]`).scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        setTimeout(() => slide.style.transform = `translateX(0)`, 200);
    }

    function getX (e) {
        return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    }
}

function setSelectedButton (index) {
    const selectedBtnHTML = document.querySelector(".slider-button.selected").innerHTML;
    // Removing .selected class from each button before adding it to the right one; 
    sliderButtons.forEach((button) => {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
            button.innerHTML = "";
        }
    })

    const sliderButton = slider.querySelector(`.slider-button-list__element:nth-child(${index + 1}) .slider-button`);
    sliderButton.classList.add("selected");
    sliderButton.innerHTML = selectedBtnHTML;
}