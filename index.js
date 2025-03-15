const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll(".image-container img");
const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;
let interval;

startAutoSlide();

nextEl.addEventListener("click", () => {
    currentImg++;
    resetAutoSlide();
    updateImg();
})

prevEl.addEventListener("click", () => {
    currentImg--;
    resetAutoSlide();
    updateImg();
})

function updateImg() {
    if(currentImg > imgsEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgsEl.length
    }
    //Dynamic width calculation
    const imgWidth = imgsEl[0].clientWidth;
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * imgWidth}px)`;
}

//Start auto slide
function startAutoSlide() {
    interval = setInterval(() => {
        currentImg++;
        updateImg();
    } ,3000)
}

//Reset slider when is cliked
function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

