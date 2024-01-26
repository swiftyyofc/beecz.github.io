//husky <3
const closeBtn = document.getElementById('close');
const modalMenu = document.getElementById('modal');
const modalBtn = document.querySelector('.modal__button');

setTimeout(() => {
    modalMenu.classList.add('show');
}, 1);

closeBtn.addEventListener('click', () => {
    modalMenu.classList.remove('show')
});
modalBtn.addEventListener('click', () => {
    modalMenu.classList.remove('show')
});
modalMenu.addEventListener('click', () => {
    modalMenu.classList.remove('show');
});

const countEl = document.getElementById('count');