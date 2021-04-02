const menu_buger = document.querySelector('#menu_buger');
const menu_container = document.querySelector('#menu_container');

menu_buger.addEventListener('click', () => {
  menu_container.classList.toggle('active');
});
