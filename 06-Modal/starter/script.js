'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  // modal.style.display = 'none';
  // overlay.style.display = 'none';
  // console.log('closed clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  // modal.style.display = 'block';
  // overlay.style.display = 'block';
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

// adding keydow event
document.addEventListener('keydown', function (e) {
  // when key pressed is ESC
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // check if modal is On
    // if modal is On, close it
    closeModal();
  }
});
