const btn = document.querySelector(`.btn`);
const color = document.querySelector(`.color`);
btn.addEventListener(`click`, () => {
  const letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; ++i) {
    randomColor += letters[Math.floor(Math.random() * letters.length)];
  }
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
