const yearElement = document.createElement('span');

function addFooterYear() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  yearElement.textContent = new Date().getFullYear();
  footer.appendChild(document.createTextNode(' | '));
  footer.appendChild(yearElement);
}

function init() {
  addFooterYear();
}

window.addEventListener('DOMContentLoaded', init);
