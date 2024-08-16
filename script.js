var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomDiceImage1 = "images\\dice"+randomNumber1+".png";

var randomNumber2 = Math.floor((Math.random()*6))+1;
var randomDiceImage2 = "images\\dice"+randomNumber2+".png";

var randomNumber3 = Math.floor((Math.random()*6))+1;
var randomDiceImage3 = "images\\dice"+randomNumber3+".png";

var randomNumber4 = Math.floor((Math.random()*6))+1;
var randomDiceImage4 = "images\\dice"+randomNumber4+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
document.querySelectorAll("img")[2].setAttribute("src",randomDiceImage3);
document.querySelectorAll("img")[3].setAttribute("src",randomDiceImage4);


// var div = document.createElement('div');
// var p = document.createElement('p');
// p.textContent = 'Dice100000';
// var img = document.createElement('img');
// img.setAttribute("src","images\\dice1.png");
// p.appendChild(img);
// div.appendChild(p);

// var existingElement = document.getElementById("sum");
// document.querySelector(".container").insertBefore(div, existingElement);



var sum = randomNumber1+randomNumber2+randomNumber3+randomNumber4;
var output = "Sum = "+sum;
document.querySelector("h2").innerHTML= output;

