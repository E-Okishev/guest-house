let currentImage = 0;
const buttonPrew = document.querySelector('#slider_prew');
const buttonNext = document.querySelector('#slider_next');
const showImage = document.querySelector('#slidePhoto');

function onChengeClass() {
    showImage.classList.replace(`${showImage.classList[0]}`, `bg_photo${currentImage}`)
}

function onClickPrew() {
    currentImage -= 1;
    if (currentImage < 0) {
        currentImage = 2
    }
    onChengeClass()
};

function onClickNext() {
    currentImage += 1;
    if (currentImage > 2) {
        currentImage = 0
    }
    onChengeClass()
}

function slider() {
    buttonPrew.addEventListener('click', onClickPrew)
    buttonNext.addEventListener('click', onClickNext)
};

slider()