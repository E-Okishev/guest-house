let currentImage = 0;
const buttonPrew = document.querySelector('#slider_prew');
const buttonNext = document.querySelector('#slider_next');
const showImage = document.querySelector('#slidePhoto');

const bgImages = [
    'bg.png',
    'H9.jpg',
    'Gol.jpg'
]

onChengeBgPhoto()

function onChengeBgPhoto() {
    showImage.setAttribute('style', `background-image: url(../img/${bgImages[currentImage]})`)
}

function onClickPrew() {
    currentImage -= 1;
    if (currentImage < 0) {
        currentImage = bgImages.length - 1;
    }
    onChengeBgPhoto()
};

function onClickNext() {
    currentImage += 1;
    if (currentImage > bgImages.length - 1) {
        currentImage = 0
    }
    onChengeBgPhoto()
}

function slider() {
    buttonPrew.addEventListener('click', onClickPrew)
    buttonNext.addEventListener('click', onClickNext)
};

slider()