var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("color3");


// activo setgradient onload con texto
window.onload = setGradient;

function setGradient() {
        body.style.background =
        "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
        css.textContent = body.style.background + ";";
}

//RANDOMIZE gradient

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//function to generate random gradient(s) rgb 0-255
function getRandomGradient() {
	let r1 = getRandomInt(256);
	let g1 = getRandomInt(256);
	let b1 = getRandomInt(256);
	let r2 = getRandomInt(256);
	let g2 = getRandomInt(256);
	let b2 = getRandomInt(256);
	let randomGradient = "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 
 
	body.style.background = randomGradient;
	random.style.background = randomGradient;
	
	css.textContent = body.style.background + ";";
}
 
color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);

random.addEventListener("click", getRandomGradient);
