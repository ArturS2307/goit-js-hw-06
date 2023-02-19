let counterValue = document.getElementById('value');
counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})