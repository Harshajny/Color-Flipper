const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const buttonss = document.querySelector(".btn-btn-hero");
const navlinks = document.querySelector(".container");
const navcenter = document.querySelector(".nav-center");


btn.addEventListener('click', function() {
let hexColor="#";
for(let i=0;i<6;i++)
{
    hexColor+=hex[getRandomNumber(0, 15)];
}
color.textContent=hexColor;
document.body.style.backgroundColor = hexColor;

navcenter.style.backgroundColor=hexColor;
buttonss.style.backgroundColor = hexColor;
if (randomNumber == 0) 
{
  buttonss.style.backgroundColor ="rgb(256,256,256)";
}

color.textContent =  colors[randomNumber];
});


function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
