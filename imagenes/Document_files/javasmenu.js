const floatButton = document.getElementById('float-button'),
circularMenu = document.getElementById('circular-menu');

floatButton.addEventListener('click', () => {
  floatButton.classList.toggle('pulsed');
  circularMenu.classList.toggle('expand');
});