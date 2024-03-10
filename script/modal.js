const openButton = document.querySelector('#show_modal');
const closeButton = document.querySelector('#close_modal')
const modal = document.querySelector('#modal');
const background = document.querySelector('#modal_bg')
const content = document.querySelector(".content");

function onChangeClassModal() {
  modal.classList.toggle(`visuali_hidden`);
  background.classList.toggle(`visuali_hidden`);
  content.classList.toggle(`blur`);
}

function showModal() {
  openButton.addEventListener('click', onChangeClassModal)
  closeButton.addEventListener('click', onChangeClassModal)
}

showModal()