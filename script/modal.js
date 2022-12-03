const openButton = document.querySelector('#show_modal');
const closeButton = document.querySelector('#close_modal')
const modal = document.querySelector('#modal');
const background = document.querySelector('#modal_bg')

function onChengeClassModal() {
    modal.classList.toggle(`visuali_hidden`)
    background.classList.toggle(`visuali_hidden`)
}

function showModal() {
    openButton.addEventListener('click', onChengeClassModal)
    closeButton.addEventListener('click', onChengeClassModal)
}
showModal()