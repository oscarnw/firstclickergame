apple = 0
watermelon = 0
magicBean = 0
appleGrowing = 0
watermelonGrowing = 0

 function getAppleSeed(number) {

apple = apple + number

 document.getElementById("apple").innerHTML = apple;

}

 function getWatermelonSeed(number) {

watermelon = watermelon + number

 document.getElementById("watermelon").innerHTML = watermelon;

}

 function getMagicBean(number) {

magicBean = magicBean + number

 document.getElementById("magicBean").innerHTML = magicBean;

}

function plantAppleSeed(number) { 

	if(apple>0) {
	appleGrowing = appleGrowing + number
	apple = apple - number

	document.getElementById("apple").innerHTML = apple;
	document.getElementById("appleGrowing").innerHTML = appleGrowing;
	}
}

function plantWatermelon(number) { 

	if(watermelon>0) {
	watermelonGrowing = watermelonGrowing + number
	watermelon = watermelon - number

	document.getElementById("watermelon").innerHTML = watermelon;
	document.getElementById("watermelonGrowing").innerHTML = watermelonGrowing;
	}
}