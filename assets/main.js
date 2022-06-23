let button5 = document.querySelector("#plusFive")
let indicator = document.querySelector("#number-indicator")
let disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()

button5 = document.querySelector("#plusTen");

button5.addEventListener('click', () => {
  disp.textContent = "added 10";
  indicator.textContent = (parseInt(indicator.textContent) +10).toString()
});

button5 = document.querySelector("#plusFifteen");

button5.addEventListener('click', () => {
  disp.textContent = "added 15";
  indicator.textContent = (parseInt(indicator.textContent) +15).toString()
});

button5 = document.querySelector("#plusTwenty");

button5.addEventListener('click', () => {
  disp.textContent = "added 20";
  indicator.textContent = (parseInt(indicator.textContent) +20).toString()
});
})
