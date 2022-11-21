const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

nextButton.addEventListener('click', (e) => {
    console.log(e);
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
})

prevButton.addEventListener("click", (e) => {
    console.log(e);
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});