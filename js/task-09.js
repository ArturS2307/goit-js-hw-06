  function getRandomHexColor() {
    
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const button = document.querySelector('button.change-color');
  button.addEventListener('click', changeColorOnClick);

  function changeColorOnClick() {
const bodyEl = document.querySelector('body');
const widgetSpanEl = document.querySelector('.widget .color');
bodyEl.style.backgroundColor = getRandomHexColor();
widgetSpanEl.textContent = getRandomHexColor();
  }

