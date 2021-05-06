var cssText = document.querySelector("h3");
var color1 = document.querySelector(".firstColor");
var color2 = document.querySelector(".secColor");
var body = document.getElementById("colorBody");
var randBtn = document.getElementById("random");


function generatorSet() {

	 body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	 cssText.textContent = body.style.background + ";"

}

function randomSet() {

	var arrayColor = ["#"];
	

	for(var i=0; i<6; i++) {

     var rand = Math.floor(Math.random()*10);
      arrayColor.push([rand]);


	}

	 var colorGet = arrayColor.join('');

	return colorGet;
}

function getRandomSet() {

	color1.value = randomSet();
	color2.value = randomSet();

	generatorSet();
}




color1.addEventListener("input", generatorSet);
color2.addEventListener("input", generatorSet);
randBtn.addEventListener("click", getRandomSet);