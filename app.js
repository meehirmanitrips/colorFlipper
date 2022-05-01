const colors = [`green`, `red`, `rgba(133, 122, 200)`, `#f15025`];
const btn = document.querySelector(`.btn`);
const color = document.querySelector(`.color`);
btn.addEventListener(`click`, () => {
  //Get Random Number between 0 and 3
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});
