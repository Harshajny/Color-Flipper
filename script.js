const colors = ["rgb(0,0,0)","rgb(16,78,235)", "rgb(255,255,255)", "rgb(244,135,0)", "rgb(219,16,235)","rgb(169,14,255)", "rgb(226,235,16)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const buttonss = document.querySelector(".btn-btn-hero");
const navlinks = document.querySelector(".container");
const navcenter = document.querySelector(".nav-center");

btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber(0, 5);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
 
navcenter.style.backgroundColor=colors[randomNumber];
  buttonss.style.backgroundColor = colors[randomNumber];
  if (randomNumber == 0) {
    buttonss.style.backgroundColor = colors[2];
  }

  color.textContent = colors[randomNumber];
});


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
